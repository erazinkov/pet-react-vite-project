import './JournalList.css';
import JournalItem from '../JournalItem/JournalItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';
import NoteButton from '../NoteButton/NoteButton';

function JournalList({items, setItem}) {
	const {userId} = useContext(UserContext);
	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	};
	const filteredItems = useMemo(() => {
		return items.filter(element => element.userId === userId).sort(sortItems);
	}, [items, userId]) ;
	
	if (items.length === 0) {
		return <p>Записей нет</p>;
	}
	
	return <>
		{filteredItems.map(element => 
			<NoteButton key={element.id} onClick={() => setItem(element)}>
				<JournalItem
					title={element.title}
					date={element.date}
					text={element.post}
				></JournalItem>
			</NoteButton>
		)}
	</>;
}

export default JournalList;