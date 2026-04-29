import './NoteList.css';
import NoteItem from '../NoteItem/NoteItem';
import { useContext, useMemo } from 'react';
import { UserContext } from '../../context/user.context';
import NoteButton from '../NoteButton/NoteButton';

function NoteList({items, setItem}) {
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
				<NoteItem
					title={element.title}
					date={element.date}
					text={element.post}
				></NoteItem>
			</NoteButton>
		)}
	</>;
}

export default NoteList;