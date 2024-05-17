interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string;
	error?: string;
	options: { value: string; label: string }[];
}

const Select: React.FC<SelectProps> = ({ label, error, options, ...props }) => {
	return (
		<div className='mb-4'>
			{label && (
				<label className='block text-gray-700 text-sm font-bold mb-2'>
					{label}
				</label>
			)}
			<div className='relative'>
				<select
					className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
						error ? 'border-red-500' : 'border-gray-300'
					}`}
					{...props}
				>
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
				<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
					<svg className='fill-current h-4 w-4' viewBox='0 0 20 20'>
						<path d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' />
					</svg>
				</div>
			</div>
			{error && <p className='text-red-500 text-xs italic mt-2'>{error}</p>}
		</div>
	);
};

export default Select;
