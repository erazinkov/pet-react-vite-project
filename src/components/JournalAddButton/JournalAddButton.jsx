import NoteButton from '../NoteButton/NoteButton';
import './JournalAddButton.css';

function JournalAddButton({clearForm}) {
	return (
		<NoteButton className='journal-add' onClick={clearForm}>
            Добавить заметку
		</NoteButton>
	);
}

export default JournalAddButton;