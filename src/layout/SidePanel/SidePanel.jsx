import styles from './SidePanel.module.css';

function SidePanel({children}) {
	return (
		<div className={styles['side-panel']}>{children}</div>
	);
}

export default SidePanel;