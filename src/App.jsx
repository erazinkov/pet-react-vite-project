import './App.css';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/use-localstorage.hook';

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

	const addItem = item => {
		setItems([...mapItems(items), {
			id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1,
			post: item.post,
			date: new Date(item.date),
			title: item.title
		}]);
	};

	return (
		<div className='app'>
			<LeftPanel>
				<Header></Header>
				<JournalAddButton></JournalAddButton>
				<JournalList items={mapItems(items)}>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}></JournalForm>
			</Body>
		</div>
	);
}

export default App;
