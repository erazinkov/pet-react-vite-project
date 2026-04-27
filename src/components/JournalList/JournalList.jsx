import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
function JournalList({items}) {

	if (items.length === 0) {
		return <p>Записей нет</p>;
	}
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	return <>
		{items.sort(sortItems).map(element => 
			<CardButton key={element.id}>
				<JournalItem
					title={element.title}
					date={element.date}
					text={element.text}
				></JournalItem>
			</CardButton>
		)}
	</>;
}

export default JournalList;