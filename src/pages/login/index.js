import React, { useState, useEffect } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import './login.css';

const Login = (props) => {
	const { addToast } = useToasts();
	const [ name, setName ] = useState('');
	const [ password, setPassword ] = useState('');

	const [ isSuccessfulSubmit, setIsSuccessfulSubmit ] = useState(false);
	const [ isLoggedIn, setIsLogged ] = useLocalStorage('isLogged');

	const formSubmit = (e) => {
		e.preventDefault();
		if (name === 'Admin' && password === '123') {
			setIsSuccessfulSubmit(true);
		} else {
			addToast('Incorrect email or password', { appearance: 'error' });
		}
	};

	useEffect(
		() => {
			if (!isSuccessfulSubmit) {
				return;
			}
			setIsLogged(true);
		},
		[ isSuccessfulSubmit, setIsLogged ]
	);

	if (isLoggedIn && JSON.parse(isLoggedIn)) {
		return <Redirect to='/main' />;
	}

	return (
		<div className='login-dark'>
			<form onSubmit={formSubmit}>
				<h2 className='sr-only'>Login Form</h2>
				<div className='illustration'>
					<i className='icon ion-ios-locked-outline' />
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						type='text'
						name='text'
						placeholder='Name'
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						type='password'
						name='password'
						placeholder='Password'
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className='form-group'>
					<button className='btn btn-primary btn-block' type='submit'>
						Log In
					</button>
				</div>
				<a href={'/'} className='forgot'>
					Forgot your email or password?
				</a>
			</form>
		</div>
	);
};

export default Login;
