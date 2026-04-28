import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
function SelectUser() {
	const {userId, setUserId} = useContext(UserContext);
	const onChange = (event) => {
		setUserId(Number(event.target.value));
	};
	return (
		<>
			<select name="user" id="user" value={userId} onChange={onChange}>
				<option value="1">Егор</option>
				<option value="2">Вася</option>
			</select>
		</>
	);
}

export default SelectUser;