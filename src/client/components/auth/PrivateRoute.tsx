import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, ...rest }) => {
	const [checking, setChecking] = React.useState<boolean>(true);
	const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			//no token present
			setChecking(false);
		} else {
			fetch('/auth/token/verify', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			}).then(res => {
				if (res.ok) {
					//token present, verified by server
					setLoggedIn(true);
					setChecking(false);
				} else {
					//token present, server rejected
					setChecking(false);
				}
			});
		}
	}, []);

	if (checking) {
		return (
			<div className="d-flex justify-content-center">
				<div className="spinner-border spinner-size text-primary" role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}

	if (loggedIn) {
		return <Route {...rest}>{children}</Route>;
	} else {
		return <Redirect to="/login" />;
	}
};

interface PrivateRouteProps {
	exact?: boolean;
	path: string;
}

export default PrivateRoute;
