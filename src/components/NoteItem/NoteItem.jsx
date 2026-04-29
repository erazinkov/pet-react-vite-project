import styles from './NoteItem.module.css';

function NoteItem({title, date, text}) {
	const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);
	return (
		<>
			<h2 className={styles['note-item__header']}>{title}</h2>
			<h2 className={styles['note-item__body']}>
				<div className={styles['note-item__date']}>{formatedDate}</div>
				<div className={styles['note-item__text']}>{text}</div>
			</h2>
		</>
	);
}

export default NoteItem;