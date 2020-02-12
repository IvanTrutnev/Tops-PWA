import React, { useState, useEffect, useCallback } from 'react';
import API from '../../services/api-service';
import Spinner from '../../components/spinner';
import useLocalStorage from '../../hooks/useLocalStorage';
import { Redirect } from 'react-router-dom';

import './main.css';

function Main() {
	const [ startDate, setStartDate ] = useState('');
	const [ endDate, setEndDate ] = useState('');
	const [ data, setData ] = useState(null);
	const [ isLoading, setIsLoading ] = useState(false);
	const [ isLoggedIn, setIsLogged ] = useLocalStorage('isLogged');

	const api = useCallback(new API(), []);

	useEffect(
		() => {
			setIsLoading(true);
			api.getAllPeople().then((data) => {
				setData(data.results);
				setIsLoading(false);
			});
		},
		[ startDate, endDate, api, setData, setIsLoading ]
	);

	if (!JSON.parse(isLoggedIn)) {
		return <Redirect to='/' />;
	}

	return (
		<div className='App container'>
			<div className='row form-group'>
				<div className='col'>
					<label className='form-label'>Start date</label>
					<input
						type='date'
						className='form-control form-control-lg'
						onChange={(e) => setStartDate(e.target.value)}
						palceholder='Select start date'
					/>
				</div>
			</div>
			<div className='row form-group'>
				<div className='col'>
					<label className='form-label'>End date</label>
					<input
						type='date'
						className='form-control form-control-lg'
						onChange={(e) => setEndDate(e.target.value)}
						plcaholder='Select end date'
					/>
				</div>
			</div>
			{isLoading && <Spinner />}
			{data &&
			!isLoading && (
				<div className='statistic'>
					<div className='param-wrapper'>
						<h2>100000 $</h2>
						<div className='param-name'>Total spent</div>
					</div>
					<div className='param-wrapper'>
						<h2>130000 $</h2>
						<div className='param-name'>Total received</div>
					</div>
					<hr />
					<div className='param-wrapper'>
						<h2 className='positive'>
							30000 $ <span>&#8593;</span>
						</h2>
						<div className='param-name'>Margin at period</div>
					</div>
				</div>
			)}
			<button
				className='btn btn-lg btn-secondary logout-btn'
				onClick={() => setIsLogged(false)}
			>
				Logout
			</button>
		</div>
	);
}

export default Main;
