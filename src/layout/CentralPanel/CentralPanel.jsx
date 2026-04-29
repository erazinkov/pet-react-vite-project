import styles from './CentralPanel.module.css';

function CentralPanel({children}) {
	return (
		<div className={styles['central-panel']}>{children}</div>
	);
}

export default CentralPanel;