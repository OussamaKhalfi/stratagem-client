import { createContext } from 'react';
import { ITask } from '../types/task.type';
import { Create, Update } from '../types/shared.type';

export interface TaskContextType {
	tasks: ITask[];
	handleFetchTasks: () => Promise<void>;
	handleCreateTask: (task: Create<ITask>) => Promise<void>;
	handleUpdateTask: (task: Update<ITask>) => Promise<void>;
	handleDeleteTask: (taskId: string) => Promise<void>;
}

export const TaskContext = createContext<TaskContextType>({
	tasks: [],
	handleFetchTasks: async () => {},
	handleCreateTask: async () => {},
	handleUpdateTask: async () => {},
	handleDeleteTask: async () => {},
});
