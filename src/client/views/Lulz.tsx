import * as React from 'react';
import apiService from '../utils/api-service';

const Lulz: React.FC<LulzProps> = props => {

	React.useEffect(() => {
		apiService('/api/lulz')
			.then(lulz => console.log(lulz));
	}, []);

	return (
		<main className="container">
			<section className="row justify-content-center mt-3">
				<div className="col-12">
					<h1 className="display-1 text-center">Lulz View</h1>
				</div>
			</section>
		</main>
	);
};

interface LulzProps {}

export default Lulz;
