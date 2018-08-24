import { GetPastEvents, MakeDateTime } from './helper.js';
import EventDetails from './eventDetails.js';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Event from './event.js';
import Head from './head.js';
import Nav from './nav.js';
import React from 'react';

const Homepage = ({
	pagetitle,
	stylesheet,
	header,
	main,
	next,
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

	const pastEvents = GetPastEvents( _pages );

	return (
		<html>
			<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle }/>

			<body className="homepage">
				<div className="wrapper">
					{ header }

					<main itemScope itemType="http://schema.org/Event">
						<div className="innerWrapper eventsHeadline">
							<div className="innerWrapper-left">
								<h1>
									<span itemProp="name">
										<span className="sr-only">Design System Meetup - </span>
										<span className="heading-small heading--shade-side eventsHeadline-fontstack">
											{ next.version }<br/>
											{ next.city }
										</span>
									</span>
									<span className="eventsHeadline-title" itemProp="startDate" content={ MakeDateTime( next.date, next.speakers[ 0 ].time ).format() }>
										{ MakeDateTime( next.date, next.speakers[ 0 ].time ).format('Do MMM YYYY') }
									</span>
								</h1>
							</div>
							<div className="innerWrapper-right" itemProp="offers" itemScope itemType="http://schema.org/Offer">
								<span itemProp="price" content="Free" />
								<span itemProp="priceCurrency" content="AUD" />
								<a className="btn" itemProp="url" href={ next.link }>RSVP</a>
							</div>
						</div>

						<EventDetails
							_parseMD={ _parseMD }
							_relativeURL={ _relativeURL }
							_ID={ _ID }
							pagetitle={ next.pagetitle }
							version={ next.version }
							city={ next.city }
							description={ next.description }
							date={ next.date }
							location={ next.location }
							sponsors={ next.sponsors }
							link={ next.link }
							speakers={ next.speakers }
						/>

						<strong>Past meetups</strong>
						<ul>
							{
								pastEvents.map( ( event, i ) => (
									<li key={ i }>
										<a href={ _relativeURL( event._url, _ID ) }>{ event.pagetitle }</a>
									</li>
								))
							}
						</ul>
					</main>
				</div>

				<footer className="wrapper">{ footer }</footer>

				<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
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
