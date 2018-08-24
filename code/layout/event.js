import EventDetails from './eventDetails.js';
import { MakeDateTime } from './helper.js';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import Moment from 'moment';
import Nav from './nav.js';
import React from 'react';

/**
 * The content component
 */
const Event = ({
	_ID,
	_parseMD,
	_pages,
	_relativeURL,
	pagetitle,
	version,
	city,
	description,
	date,
	location,
	sponsors,
	link,
	speakers,
	header,
	footer
}) => (
	<html>
		<Head _ID={ _ID } _relativeURL={ _relativeURL } pagetitle={ pagetitle }/>

		<body className="eventpage">
			<div className="wrapper">
				{ header }

				<main>
					<section itemScope itemType="http://schema.org/Event">
						<div className="innerWrapper eventsHeadline">
							<div className="innerWrapper-left eventsHeadline-main">
								<a className="eventsHeadline-back" href={ _relativeURL( '/', _ID ) }>
									<svg className="back" role="img" title="Go back to the homepage">
										<use xlinkHref={ _relativeURL( 'assets/svg/sprite.svg#back', _ID ) }/>
									</svg>
								</a>
								<h1>
									<span itemProp="name">
										<span className="sr-only">Design System Meetup - { version } { city }</span>
									</span>
									<span className="eventsHeadline-title" itemProp="startDate" content={ MakeDateTime( date, speakers[ 0 ].time ).format() }>
										{ MakeDateTime( date, speakers[ 0 ].time ).format('Do MMM YYYY') }
									</span>
								</h1>
							</div>
							<div className="innerWrapper-right eventsHeadline-details">
								<span className="heading-small heading--shade-side eventsHeadline-details-name">
									{ version } &mdash; { city }
								</span>
							</div>
						</div>

						<EventDetails
							_parseMD={ _parseMD }
							_relativeURL={ _relativeURL }
							_ID={ _ID }
							pagetitle={ pagetitle }
							version={ version }
							city={ city }
							description={ description }
							date={ date }
							location={ location }
							sponsors={ sponsors }
							link={ link }
							speakers={ speakers }
						/>
					</section>
				</main>
			</div>

			{ footer }

			<Scripts _ID={ _ID } _relativeURL={ _relativeURL }/>
		</body>
	</html>
);

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
