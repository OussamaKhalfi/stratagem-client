import React, { useState, useEffect } from 'react';
import Input from './form/Input';
import Button from './Button';
import { ITask } from '../types/task.type';
import { Create } from '../types/shared.type';
import Select from './form/Select';

interface TaskFormProps {
	onSubmit: (task: Create<ITask>) => void;
	onCancel?: () => void;
	init: ITask | null;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel, init }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [status, setStatus] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		if (!init) return;
		setTitle(init.title);
		setDescription(init.description);
		setStatus(init.status);
	}, [init]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!title) {
			setError('Title is required');
			return;
		}
		setError('');
		onSubmit({
			title,
			description,
			status: 'Pending',
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				label='Title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				error={error}
				placeholder='Task Title'
			/>
			<Input
				label='Description'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='Task Description'
			/>
			<Select
				label='Status'
				name='status'
				value={status}
				onChange={(e) => setStatus(e.target.value)}
				options={[
					{ value: 'Pending', label: 'Pending' },
					{ value: 'In Progress', label: 'In Progress' },
					{ value: 'Completed', label: 'Completed' },
				]}
			/>

			<div className='flex justify-end gap-2'>
				<Button color='secondary' onClick={onCancel}>
					Cancel
				</Button>
				<Button color='primary' type='submit'>
					Save
				</Button>
			</div>
		</form>
	);
};

export default TaskForm;
