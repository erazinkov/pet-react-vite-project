import './NoteButton.css';

function NoteButton({children, className, ...props}) {
	
	return (
		<button {...props} className={'note-button' + (className ? ' ' + className : '')}>{children}</button>
	);
}

export default NoteButton;