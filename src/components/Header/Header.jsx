import styles from './Header.module.css';
import SelectUser from '../SelectUser/SelectUser';

function Header() {
	return (
		<>
			<div className={styles['logo']}>
				<span>pet</span>
				<img className={styles['logo-item']} src={'/src/assets/react.svg'} alt="Логотип React" />
				<span>+</span>
				<img className={styles['logo-item']} src={'/src/assets/vite.svg'} alt="Логотип Vite" />
				<span>project</span>
			</div>
			<SelectUser></SelectUser>
		</>
	);
}

export default Header;