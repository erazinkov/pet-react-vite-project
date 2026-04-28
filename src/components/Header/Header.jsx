import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
	return (
		<>
			<img className={styles.logo} src={'/journal.svg'} alt="Логотип журнала" />
			<SelectUser></SelectUser>
		</>
	);
}

export default Header;