import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import React from 'react';
import { RelativeURL } from './helper.js';

const Page = ({
	_ID,
	_pages,
	pagetitle,
	title,
	header,
	main,
	footer
}) => {
	return (
		<html>
			<Head _ID={ _ID } _relativeURL={ RelativeURL } pagetitle={ pagetitle }/>

			<body className="page">
				<div className="wrapper">
					{ header }

					<main>
						<section>
							<div className="pageSection">
								<a className="pageSection-back" href={ RelativeURL( '/', _ID ) }>
									<svg className="back" role="img" title="Go back to the homepage">
										<use xlinkHref={ RelativeURL( 'assets/svg/sprite.svg#back', _ID ) }/>
									</svg>
								</a>
								<h1>{ title }</h1>
							</div>
							{ main }
						</section>
					</main>
				</div>

				{ footer }

				<Scripts _ID={ _ID } _relativeURL={ RelativeURL }/>
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
