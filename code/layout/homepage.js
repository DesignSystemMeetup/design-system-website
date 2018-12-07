import { GetPastEvents, MakeDateTime } from './helper.js';
import EventDetails from './eventDetails.js';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Event from './event.js';
import Head from './head.js';
import React, { Fragment } from 'react';
import { RelativeURL } from './helper.js';

const Homepage = ({
	pagetitle,
	stylesheet,
	header,
	main,
	next,
	footer,
	events,
	script,
	_ID,
	_nav,
	_pages,
	_store,
	_parseMD
}) => {

	const pastEvents = GetPastEvents( _pages );
	const time = next.speakers ? next.speakers[ 0 ].time : '5:30';

	return (
		<html>
			<Head _ID={ _ID } pagetitle={ pagetitle }/>

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
									<span className="eventsHeadline-title" itemProp="startDate" content={ MakeDateTime( next.date, time ).format() }>
										{ MakeDateTime( next.date, time ).format('Do MMM YYYY') }
									</span>
								</h1>
							</div>
							<div className="innerWrapper-right" itemProp="offers" itemScope itemType="http://schema.org/Offer">
								<span itemProp="price" content="Free" />
								<span itemProp="priceCurrency" content="AUD" />
								{ next.link && <a className="btn" itemProp="url" href={ next.link } target="_blank" rel="noopener noreferrer">Register</a> }
							</div>
						</div>

						<EventDetails
							_parseMD={ _parseMD }
							_ID={ _ID }
							pagetitle={ next.pagetitle }
							version={ next.version }
							city={ next.city }
							eventdescription={ next.eventdescription }
							date={ next.date }
							location={ next.location }
							sponsors={ next.sponsors }
							link={ next.link }
							speakers={ next.speakers }
						/>

						<h2 className="heading-small pastSchedule-headline">Past meetups</h2>
						<ul className="innerWrapper pastSchedule">
							{
								pastEvents.map( ( event, i ) => (
									<Fragment key={ i }>
										<li className="pastSchedule-item pastSchedule-item2">
											<span className="heading-small heading--shade-side">{ event.version } &mdash; { event.city }</span>
											<div>{ _parseMD( event.eventdescription ) }</div>
										</li>
										<li className="pastSchedule-item pastSchedule-item1">
											<h3 className="eventsHeadline-title">
												{ MakeDateTime( event.date, event.speakers[ 0 ].time ).format('Do MMM YYYY') }
											</h3>
											<div className="eventsHeadline-desc">
												{
													event.speakers.map( ( speaker, i ) => {
														if( speaker.name ) {
															const desc = `${
																speaker.description.split(' ').slice( 0, 20 ).join(' ')
															}${
																speaker.description.split(' ').length > 20 ? '&hellip;' : ''
															}`;

															return (
																<Fragment key={ i }>
																	<p className="heading-small heading--shade-side">{ speaker.name }</p>
																	{ speaker.title && <p className="heading-small heading--shade">{ speaker.title }</p> }
																	<div className="pastSchedule-speakerdesc">{ _parseMD( desc ) }</div>
																</Fragment>
															)
														}
													})
												}
											</div>
											<a className="pastSchedule-cta" href={ RelativeURL( event._url, _ID ) }>
												View talk details and videos
												<svg>
													<use xlinkHref={ RelativeURL( 'assets/svg/sprite.svg#forward', _ID ) }/>
												</svg>
											</a>
										</li>
									</Fragment>
								))
							}
						</ul>
					</main>
				</div>

				{ footer }

				<Scripts _ID={ _ID }/>
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
