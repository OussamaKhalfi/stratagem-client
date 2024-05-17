import { useState } from 'react';
import { ITask } from '../types/task.type';
import TaskService from '../services/task.service';
import { Create, Update } from '../types/shared.type';

function useTasks() {
	const [tasks, setTasks] = useState<ITask[]>([]);

	const addTask = (task: ITask) => {
		setTasks((prevTasks) => [...prevTasks, task]);
	};

	const editTask = (task: ITask) => {
		setTasks((prevTasks) =>
			prevTasks.map((prevTask) => (prevTask._id === task._id ? task : prevTask))
		);
	};

	const removeTask = (taskId: string) => {
		setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
	};

	const handleFetchTasks = async () => {
		try {
			const fetchedTasks = await TaskService.getAllTasks();
			setTasks(fetchedTasks);
		} catch (error) {
			console.error('Error fetching tasks:', error);
		}
	};

	const handleCreateTask = async (task: Create<ITask>) => {
		try {
			const createdTask = await TaskService.createTask(task);
			addTask(createdTask);
		} catch (error) {
			console.error('Error creating task:', error);
		}
	};

	const handleUpdateTask = async (task: Update<ITask>) => {
		try {
			const updatedTask = await TaskService.updateTask(task._id!, task);
			editTask(updatedTask);
		} catch (error) {
			console.error('Error updating task:', error);
		}
	};

	const handleDeleteTask = async (taskId: string) => {
		try {
			await TaskService.deleteTask(taskId);
			removeTask(taskId);
		} catch (error) {
			console.error('Error deleting task:', error);
		}
	};

	return {
		tasks,
		handleFetchTasks,
		handleCreateTask,
		handleUpdateTask,
		handleDeleteTask,
	};
}

export default useTasks;
