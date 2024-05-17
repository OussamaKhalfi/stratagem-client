import { twMerge } from 'tailwind-merge';

interface ButtonProps {
	onClick?: () => void;
	className?: string;
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
	type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
	onClick,
	className = '',
	children,
	color = 'primary',
	type = 'button',
}) => {
	const colorClassMap = {
		primary: 'bg-primary hover:bg-primary-dark',
		secondary: 'bg-secondary hover:bg-secondary-dark',
		danger: 'bg-danger hover:bg-danger-dark',
		success: 'bg-success hover:bg-success-dark',
		warning: 'bg-warning hover:bg-warning-dark',
	};

	return (
		<button
			type={type}
			onClick={onClick}
			className={twMerge(
				`px-4 py-2 text-white rounded-lg transition duration-300`,
				colorClassMap[color],
				className
			)}
		>
			{children}
		</button>
	);
};

export default Button;
