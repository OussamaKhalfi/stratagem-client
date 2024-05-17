interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	error?: string | null;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
	return (
		<div className='mb-4'>
			{label && (
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					{label}
				</label>
			)}
			<input
				className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
					error ? 'border-red-500' : 'border-gray-300'
				}`}
				{...props}
			/>
			{error && <p className='text-red-500 text-xs italic mt-2'>{error}</p>}
		</div>
	);
};

export default Input;
