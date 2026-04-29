import NoteButton from '../NoteButton/NoteButton';
import './AddNoteButton.css';

function AddNoteButton({clearForm}) {
	return (
		<NoteButton className='add-note' onClick={clearForm}>
            Добавить заметку
		</NoteButton>
	);
}

export default AddNoteButton;