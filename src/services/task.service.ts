import { ITask } from '../types/task.type';

const API_URL = 'http://localhost:5000/api/tasks';

const TaskService = {
	getAllTasks: async (): Promise<ITask[]> => {
		return [
			{
				_id: '1',
				title: 'Task 1',
				description: 'Description 1',
				status: 'completed',
				createdAt: new Date().getTime(),
				updatedAt: new Date().getTime(),
				deletedAt: null,
			},
			{
				_id: '2',
				title: 'Task 2',
				description: 'Description 2',
				status: 'completed',
				createdAt: new Date().getTime(),
				updatedAt: new Date().getTime(),
				deletedAt: null,
			},
			{
				_id: '3',
				title: 'Task 3',
				description: 'Description 3',
				status: 'pending',
				createdAt: new Date().getTime(),
				updatedAt: new Date().getTime(),
				deletedAt: null,
			},
		];

		try {
			const response = await fetch(API_URL);
			if (!response.ok) {
				throw new Error('Failed to fetch tasks');
			}
			const tasks = await response.json();
			return tasks;
		} catch (error) {
			throw new Error('Failed to fetch tasks');
		}
	},

	createTask: async (taskData: Partial<ITask>): Promise<ITask> => {
		try {
			const response = await fetch(API_URL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(taskData),
			});
			if (!response.ok) {
				throw new Error('Failed to create task');
			}
			const createdTask = await response.json();
			return createdTask;
		} catch (error) {
			throw new Error('Failed to create task');
		}
	},

	updateTask: async (
		taskId: string,
		taskData: Partial<ITask>
	): Promise<ITask> => {
		try {
			const response = await fetch(`${API_URL}/${taskId}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(taskData),
			});
			if (!response.ok) {
				throw new Error('Failed to update task');
			}
			const updatedTask = await response.json();
			return updatedTask;
		} catch (error) {
			throw new Error('Failed to update task');
		}
	},

	deleteTask: async (taskId: string): Promise<void> => {
		try {
			const response = await fetch(`${API_URL}/${taskId}`, {
				method: 'DELETE',
			});
			if (!response.ok) {
				throw new Error('Failed to delete task');
			}
		} catch (error) {
			throw new Error('Failed to delete task');
		}
	},
};

export default TaskService;
