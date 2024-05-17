import { useContext, useEffect, useState } from 'react';
import Modal from '../components/Modal';
import TaskForm from '../components/TaskForm';
import Task from '../components/Task';
import { ITask } from '../types/task.type';
import TaskDeleteValidation from '../components/TaskDeleteValidation';
import { TaskContext } from '../contexts/task.context';
import Button from '../components/Button';
import { Create } from '../types/shared.type';

const Tasks = () => {
	const {
		tasks,
		handleFetchTasks,
		handleCreateTask,
		handleUpdateTask,
		handleDeleteTask,
	} = useContext(TaskContext);

	const [isFormModalOpen, setIsFormModalOpen] = useState(false);
	const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
	const [currentTask, setCurrentTask] = useState<ITask | null>(null);

	useEffect(() => {
		handleFetchTasks();
	}, []);

	const handleOpenFormModal = (task?: ITask) => {
		setCurrentTask(task ?? null);
		setIsFormModalOpen(true);
	};

	const handleOpenDeleteModal = (task: ITask) => {
		setCurrentTask(task);
		setIsDeleteModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsFormModalOpen(false);
		setIsDeleteModalOpen(false);
		setCurrentTask(null);
	};

	const handleFormSubmit = (task: Create<ITask>) => {
		if (currentTask) {
			handleUpdateTask({ ...currentTask, ...task });
		} else {
			handleCreateTask(task);
		}
		handleCloseModal();
	};

	return (
		<>
			<h1 className='text-4xl font-bold mb-6 text-gray-800'>Task Manager</h1>
			<Button onClick={() => handleOpenFormModal()} className='mb-4 w-full'>
				Create Task
			</Button>

			<ul className='divide-y divide-gray-300'>
				{tasks.map((task) => (
					<Task
						key={task._id}
						task={task}
						onEdit={handleOpenFormModal}
						onDelete={handleOpenDeleteModal}
					/>
				))}
			</ul>

			<Modal isOpen={isFormModalOpen}>
				<TaskForm
					onSubmit={handleFormSubmit}
					onCancel={handleCloseModal}
					init={currentTask}
				/>
			</Modal>

			<Modal isOpen={isDeleteModalOpen}>
				{currentTask && (
					<TaskDeleteValidation
						onDelete={() => {
							handleDeleteTask(currentTask._id!);
							handleCloseModal();
						}}
						onCancel={handleCloseModal}
					/>
				)}
			</Modal>
		</>
	);
};

export default Tasks;
