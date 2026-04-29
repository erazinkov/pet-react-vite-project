import './App.css';
import SidePanel from './layout/SidePanel/SidePanel';
import CentralPanel from './layout/CentralPanel/CentralPanel';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(ii => ({
		...ii,
		date: new Date(ii.date)
	}));
}

function App() {
	const [items, setItems] = useLocalStorage('data');
	const [selectedItem, setSelectedItem] = useState(null);
	const addItem = item => {
		if (!item.id) {
			setItems([...mapItems(items), {
				...item,
				date: new Date(item.date),
				id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
			}]);
		} else {
			setItems([...mapItems(items).map(element => {
				if (element.id === item.id) {
					return {...item};
				}
				return element;
			})]);
		}
	};

	const deleteItem = (id) => {
		setItems([...items.filter(element => element.id !== id)]);
	};

	return (
		<UserContextProvider>
			<div className='app'>
				<SidePanel>
					<Header></Header>
					<JournalAddButton clearForm={() => setSelectedItem(null)}></JournalAddButton>
					<JournalList items={mapItems(items)} setItem={setSelectedItem}>
					</JournalList>
				</SidePanel>
				<CentralPanel>
					<JournalForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}></JournalForm>
				</CentralPanel>
			</div>
		</UserContextProvider>
	);
}

export default App;
