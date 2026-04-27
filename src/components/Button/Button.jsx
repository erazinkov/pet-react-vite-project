import './Button.css';

function Button({text, onClick}) {
	return (
		<button className="button hero" onClick={onClick}>{text}</button>
	);
}

export default Button;