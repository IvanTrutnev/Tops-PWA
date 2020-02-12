import React from 'react';
import { Routes } from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import './App.css';

function App() {
	return (
		<ToastProvider>
			<Router>
				<Routes />
			</Router>
		</ToastProvider>
	);
}

export default App;
