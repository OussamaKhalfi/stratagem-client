import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tasks from './pages/Tasks';
import { TaskContext } from './contexts/task.context';
import useTasks from './hooks/useTasks';
import Login from './pages/Login';

const App: React.FC = () => {
	const taskManager = useTasks();

	return (
		<Router>
			<TaskContext.Provider value={taskManager}>
				<div className='min-h-screen container mx-auto p-5'>
					<Routes>
						<Route path='/login' element={<Login />} />
						<Route path='/tasks' element={<Tasks />} />
						<Route path='/' element={<Login />} />
					</Routes>
				</div>
			</TaskContext.Provider>
		</Router>
	);
};

export default App;
