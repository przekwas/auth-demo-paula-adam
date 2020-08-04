import * as React from 'react';

const Lulz: React.FC<LulzProps> = props => {

	React.useEffect(() => {
		const token = localStorage.getItem('token');
		fetch('/api/lulz', {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
			.then(res => res.json())
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
