import { GetFutureEvents, GetPastEvents } from './helper.js';
import PropTypes from 'prop-types';
import Event from './event.js';
import Meta from './meta.js';
import Nav from './nav.js';
import React from 'react';

const Homepage = ({
	pagetitle,
	stylesheet,
	header,
	main,
	footer,
	events,
	script,
	_relativeURL,
	_ID,
	_nav,
	_pages,
	_store,
	_parseMD
}) => {

	const futureEvents = GetFutureEvents( _pages );
	const pastEvents = GetPastEvents( _pages );

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
			<body className="homepage">
				<div className="wrapper">
					<header role="banner">{ header }</header>

					<main>
						<strong>Upcoming meetup</strong>
						<ul>
							{
								futureEvents.map( ( event, i ) => (
									<li key={ i }>
										<a href={ _relativeURL( event._url, _ID ) }>{ event.title }</a>
									</li>
								))
							}
						</ul>

						<strong>Past meetups</strong>
						<ul>
							{
								pastEvents.map( ( event, i ) => (
									<li key={ i }>
										<a href={ _relativeURL( event._url, _ID ) }>{ event.title }</a>
									</li>
								))
							}
						</ul>
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

Homepage.propTypes = {
	/**
	 * header: (partials)(2)
	 */
	header: PropTypes.node.isRequired,

	/**
	 * pagetitle: Homepage
	 */
	pagetitle: PropTypes.string.isRequired,

	/**
	 * footer: (partials)(2)
	 */
	footer: PropTypes.node.isRequired,
};

export default Homepage;
