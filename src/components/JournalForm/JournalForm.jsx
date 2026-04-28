import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';


function JournalForm({onSubmit}) {
	
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const {userId} = useContext(UserContext);

	const focusInvalid = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.post:
			postRef.current.focus();
			break;
		}
	};

	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.post || !isValid.date) {
			focusInvalid(isValid);
			timerId = setTimeout(() => {
				dispatchForm({type: 'RESET_VALIDITY'});
			}, 2000);
		}
		return () => clearTimeout(timerId);
	}, [isValid]);

	useEffect(() => {
		if(isFormReadyToSubmit) {
			onSubmit(values);
			dispatchForm({type: 'RESET'});
		}
	}, [isFormReadyToSubmit, values, onSubmit]);

	const addJournalItem = (event) => {
		event.preventDefault();
		dispatchForm({type: 'SUBMIT'});
	};

	const onChange = (event) => {
		dispatchForm({type: 'SET_VALUE', payload: {
			[event.target.name]: event.target.value
		}});
	};
	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {
			userId
		}});
	}, [userId]);

	return (
		<form className={styles['journal-form']} onSubmit={addJournalItem}>
			{userId}
			<div>
				<Input type="text" name="title" ref={titleRef} onChange={onChange} value={values.title} appearance="title" isValid={isValid.title}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="date" className={styles['form-label']}>
					<img src="/calendar.svg" alt="Дата"/>
					<span>Дата</span>
				</label>
				<Input id="date" type="date" name="date" ref={dateRef} onChange={onChange} value={values.date} isValid={isValid.date}/>
			</div>
			<div className={styles['form-row']}>
				<label htmlFor="tag" className={styles['form-label']}>
					<img src="/folder.svg" alt="Метки"/>
					<span>Метки</span>
				</label>
				<Input id="tag" type="text" name="tag" onChange={onChange} value={values.tag} />
			</div>
			<textarea name="post" cols="30" rows="10" ref={postRef} onChange={onChange} value={values.post} className={
				cn(
					styles['input'],
					{
						[styles['invalid']]: !isValid.post
					}
				)
			}></textarea>
			<Button>Сохранить</Button>
		</form>
		
	);
}

export default JournalForm;