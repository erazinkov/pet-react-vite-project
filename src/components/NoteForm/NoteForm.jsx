import styles from './NoteForm.module.css';
import Button from '../Button/Button';
import { useContext, useEffect, useReducer, useRef } from 'react';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './NoteForm.state';
import Input from '../Input/Input';
import { UserContext } from '../../context/user.context';


function NoteForm({onSubmit, data, onDelete}) {
	
	const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, isFormReadyToSubmit, values} = formState;
	const titleRef = useRef();
	const dateRef = useRef();
	const postRef = useRef();
	const {userId} = useContext(UserContext);

	useEffect(() => {
		if (!data) {
			dispatchForm({type: 'RESET'});
			dispatchForm({type: 'SET_VALUE', payload: {userId}});
		}
		dispatchForm({type: 'SET_VALUE', payload: {...data}});
	}, [data]);

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
			dispatchForm({type: 'SET_VALUE', payload: {userId}});
		}
	}, [isFormReadyToSubmit, values, onSubmit, userId]);

	const addNoteItem = (event) => {
		event.preventDefault();
		dispatchForm({type: 'SUBMIT'});
	};
	const deleteNoteItem = () => {
		onDelete(data.id);
		dispatchForm({type: 'RESET'});
		dispatchForm({type: 'SET_VALUE', payload: {userId}});
	};

	const onChange = (event) => {
		dispatchForm({type: 'SET_VALUE', payload: {
			[event.target.name]: event.target.value
		}});

	};
	useEffect(() => {
		dispatchForm({type: 'SET_VALUE', payload: {userId}});
	}, [userId]);

	return (
		<form className={styles['note-form']} onSubmit={addNoteItem}>
			<div className={styles['note-form_row']}>
				<Input type="text" name="title" ref={titleRef} onChange={onChange} value={values.title} appearance="title" isValid={isValid.title}/>
				{data?.id && <button className={styles['delete']} type="button" onClick={deleteNoteItem}>
					<img  src="/delete.svg" alt="Удалить" />
				</button>}
			</div>
			<div className={styles['note-form_row']}>
				<label htmlFor="date" className={styles['note-form_label']}>
					<img src="/calendar.svg" alt="Дата"/>
					<span>Дата</span>
				</label>
				<Input id="date" type="date" name="date" ref={dateRef} onChange={onChange} value={values.date ? new Date(values.date).toISOString().slice(0, 10) : ''} isValid={isValid.date}/>
			</div>
			<div className={styles['note-form_row']}>
				<label htmlFor="tag" className={styles['note-form_label']}>
					<img src="/tag.svg" alt="Метки"/>
					<span>Тэги</span>
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

export default NoteForm;