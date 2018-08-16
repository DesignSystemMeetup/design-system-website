import PropTypes from 'prop-types';
import Meta from './meta.js';
import Nav from './nav.js';
import React from 'react';

const Page = ({
	pagetitle,
	stylesheet,
	header,
	main,
	footer,
	data,
	events,
	script,
	_relativeURL,
	_ID,
	_nav,
	_pages,
	_store
}) => {
	return (
		<html>
			<head>
				<title>{ pagetitle ? pagetitle : 'Design System meetup' }</title>
				<Meta/>
				<link rel="stylesheet" href={_relativeURL(`/assets/css/site.css`, _ID)} />

				{
					stylesheet != undefined
						? <link rel="stylesheet" href={ _relativeURL(`/assets/css/${stylesheet}.css`, _ID) } />
						: null
				}
			</head>
			<body className="eventpage">
				<div className="wrapper">
					<header role="banner">{ header }</header>

					<main>
						<Nav _ID={ _ID } _pages={ _pages } _relativeURL={ _relativeURL } />

						<section>
							{ data }
						</section>
					</main>
				</div>

				<footer>{ footer }</footer>

				{
					script != undefined
						? <script type="text/javascript" src={ _relativeURL( `/assets/js/${script}.js`, _ID ) }/>
						: null
				}
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
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

export default Page;
