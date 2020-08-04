import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './views/Home';
import Lulz from './views/Lulz';
import Login from './views/Login';
import PrivateRoute from './components/auth/PrivateRoute';

const App: React.FC<AppProps> = props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute exact path="/lulz">
					<Lulz />
				</PrivateRoute>
				<Route exact path="/login">
					<Login />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;