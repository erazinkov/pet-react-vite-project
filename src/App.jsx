import './App.css';
import SidePanel from './layout/SidePanel/SidePanel';
import CentralPanel from './layout/CentralPanel/CentralPanel';
import Header from './components/Header/Header';
import NoteList from './components/NoteList/NoteList';
import { useLocalStorage } from './hooks/use-localstorage.hook';
import { UserContextProvider } from './context/user.context';
import { useState } from 'react';
import AddNoteButton from './components/AddNoteButton/AddNoteButton';
import NoteForm from './components/NoteForm/NoteForm';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(element => ({
		...element,
		date: new Date(element.date)
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
				id: items.length > 0 ? Math.max(...items.map(element => element.id)) + 1 : 1
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
					<AddNoteButton clearForm={() => setSelectedItem(null)}></AddNoteButton>
					<NoteList items={mapItems(items)} setItem={setSelectedItem}>
					</NoteList>
				</SidePanel>
				<CentralPanel>
					<NoteForm onSubmit={addItem} onDelete={deleteItem} data={selectedItem}></NoteForm>
				</CentralPanel>
			</div>
		</UserContextProvider>
	);
}

export default App;
