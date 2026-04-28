import './CardButton.css';

function CardButton({children, className, ...props}) {
	const rc = 'card-button' + (className ? ' ' + className : '');
	return (
		<button {...props} className={rc}>{children}</button>
	);
}

export default CardButton;