import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login';
import Main from './pages/main';

export const Routes = () => {
	return (
		<Switch>
			<Route path='/' component={Login} exact />
			<Route path='/main' component={Main} />
		</Switch>
	);
};
