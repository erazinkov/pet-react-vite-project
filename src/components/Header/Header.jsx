import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';
import Button from '../Button/Button';
import { useState } from 'react';

const logos = ['/journal.svg', '/calendar.svg'];

function Header() {
	const [logoIndex, setLogoIndex] = useState(0);

	const onClick = () => {
		setLogoIndex(state => Number(!state));
	};

	return (
		<>
			<img className={styles.logo} src={logos[logoIndex]} alt="Логотип журнала" />
			<SelectUser></SelectUser>
			<Button onClick={onClick}>Test</Button>
		</>
	);
}

export default Header;