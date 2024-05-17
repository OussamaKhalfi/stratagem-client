import Button from './Button';

interface Props {
	onCancel: () => void;
	onDelete: () => void;
}

const TaskDeleteValidation: React.FC<Props> = ({ onCancel, onDelete }) => {
	return (
		<>
			<p className='text-lg mb-4'>Are you sure you want to delete this task?</p>
			<div className='flex justify-end gap-2'>
				<Button color='secondary' onClick={onCancel}>
					Cancel
				</Button>
				<Button color='danger' onClick={onDelete}>
					Delete
				</Button>
			</div>
		</>
	);
};

export default TaskDeleteValidation;
