import { useState } from 'react';
import { ITask } from '../types/task.type';
import { TaskContext } from '../contexts/task.context';

export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const addTask = (task: ITask) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const deleteTask = (taskId: string) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
	};

	const editTask = (task: ITask) => {
		setTasks((prevTasks) =>
			prevTasks.map((prevTask) => (prevTask._id === task._id ? task : prevTask))
		);
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask }}>
			{children}
		</TaskContext.Provider>
	);
};
