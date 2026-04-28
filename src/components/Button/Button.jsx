import './Button.css';

function Button({children, onClick}) {
	return (
		<button className="button hero" onClick={onClick}>{children}</button>
	);
}

export default Button;