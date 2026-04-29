import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import styles from './SelectUser.module.css';

function SelectUser() {
	const {userId, setUserId} = useContext(UserContext);
	const onChange = (event) => {
		setUserId(Number(event.target.value));
	};
	return (
		<>
			<select className={styles['select-user']} name="user" id="user" value={userId} onChange={onChange}>
				<option value="1">User1</option>
				<option value="2">User2</option>
			</select>
		</>
	);
}

export default SelectUser;