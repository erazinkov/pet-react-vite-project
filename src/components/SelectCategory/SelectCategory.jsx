import { useContext } from 'react';
import { CategoryContext } from '../../context/category.context';
import styles from './SelectCategory.module.css';

function SelectCategory() {
	const {categoryId, setCategoryId} = useContext(CategoryContext);
	const onChange = (event) => {
		setCategoryId(Number(event.target.value));
	};
	return (
		<>
			<select className={styles['select-category']} name="category" id="category" value={categoryId} onChange={onChange}>
				<option value="1">Дела</option>
				<option value="2">Питание</option>
				<option value="3">Спорт</option>
			</select>
		</>
	);
}

export default SelectCategory;