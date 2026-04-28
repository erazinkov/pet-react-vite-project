import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import CardButton from '../CardButton/CardButton';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';

function JournalList({items}) {
	const {userId} = useContext(UserContext);

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
		{items.filter(element => element.userId === userId).sort(sortItems).map(element => 
			<CardButton key={element.id}>
				<JournalItem
					title={element.title}
					date={element.date}
					text={element.post}
				></JournalItem>
			</CardButton>
		)}
	</>;
}

export default JournalList;