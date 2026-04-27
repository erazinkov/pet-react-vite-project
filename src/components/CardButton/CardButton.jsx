import './CardButton.css';

function CardButton({children, className}) {
	const rc = 'card-button' + (className ? ' ' + className : '');
	return (
		<button className={rc}>{children}</button>
	);
}

export default CardButton;