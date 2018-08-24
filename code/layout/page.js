import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import Nav from './nav.js';
import React from 'react';

const Page = ({
	_ID,
	_relativeURL,
	_pages,
	pagetitle,
	header,
	main,
	footer
}) => {
	return (
		<html>
			<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle }/>

			<body className="page">
				<div className="wrapper">
					{ header }

					<main>
						<Nav _ID={ _ID } _pages={ _pages } _relativeURL={ _relativeURL } />

						<section>
							{ main }
						</section>
					</main>
				</div>

				<footer className="wrapper">{ footer }</footer>

				<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
			</body>
		</html>
	);
};

Page.propTypes = {
	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string,

	/**
	 * main: (partials)(2)
	 */
	main: PropTypes.node.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

export default Page;
