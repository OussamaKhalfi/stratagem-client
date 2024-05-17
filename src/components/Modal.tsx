interface ModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50'>
			<div className="bg-white py-7 px-10 rounded-xl">{children}</div>
		</div>
	);
};

export default Modal;
