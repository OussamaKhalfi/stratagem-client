import React from 'react';
import { ITask } from '../types/task.type';
import Button from './Button';

interface TaskProps {
	task: ITask;
	onEdit: (task: ITask) => void;
	onDelete: (task: ITask) => void;
}

const Task: React.FC<TaskProps> = ({ task, onEdit, onDelete }) => {
	return (
		<li className='py-4'>
			<div className='flex items-center justify-between'>
				<div>
					<h2 className='text-2xl font-semibold text-gray-700'>{task.title}</h2>
					<p className='text-gray-600 mt-1'>{task.description}</p>
				</div>
				<div className='flex space-x-2'>
					<Button color='primary' onClick={() => onEdit(task)}>
						Edit
					</Button>
					<Button color='danger' onClick={() => onDelete(task)}>
						Delete
					</Button>
				</div>
			</div>
		</li>
	);
};

export default Task;
