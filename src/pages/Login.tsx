import React, { useState } from 'react';
import Input from '../components/form/Input';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailError, setEmailError] = useState<string | null>(null);
	const [passwordError, setPasswordError] = useState<string | null>(null);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

		const isEmailValid = emailRegex.test(email);
		const isPasswordValid = password.length >= 6;

		setEmailError(isEmailValid ? null : 'Invalid email');
		setPasswordError(
			isPasswordValid ? null : 'Password must be at least 6 characters'
		);

		if (!isEmailValid || !isPasswordValid) {
			return;
		}

		navigate('/tasks');
	};

	return (
		<div className='flex items-center justify-center min-h-screen bg-gray-100 p-5'>
			<div className='w-full max-w-md bg-white p-5 rounded shadow-lg'>
				<h1 className='text-2xl font-bold mb-6 text-gray-800 text-center'>
					Login
				</h1>
				<form onSubmit={handleSubmit}>
					<Input
						label='Email'
						name='email'
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						error={emailError}
					/>
					<Input
						label='Password'
						name='password'
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						error={passwordError}
					/>

					<Button type='submit' className='mt-4 w-full'>
						Login
					</Button>
				</form>
			</div>
		</div>
	);
};

export default Login;
