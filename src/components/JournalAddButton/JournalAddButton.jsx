import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton({clearForm}) {
	return (
		<CardButton className='journal-add' onClick={clearForm}>
            Новая запись
		</CardButton>
	);
}

export default JournalAddButton;