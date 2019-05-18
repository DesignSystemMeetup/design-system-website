import { MakeDateTime, RelativeURL } from './helper.js';
import EventDetails from './eventDetails.js';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import React from 'react';

/**
 * The content component
 */
const Event = ({
	_ID,
	_parseMD,
	_pages,
	pagetitle,
	version,
	city,
	image,
	eventdescription,
	date,
	location,
	sponsors,
	link,
	speakers,
	header,
	footer
}) => (
	<html>
		<Head _ID={ _ID } pagetitle={ pagetitle } eventdescription={ eventdescription } image={ image }/>

		<body className="eventpage">
			<div className="wrapper">
				{ header }

				<main>
					<section itemScope itemType="http://schema.org/Event">
						<div className="innerWrapper eventsHeadline">
							<div className="innerWrapper-left eventsHeadline-main">
								<a className="eventsHeadline-back" href={ RelativeURL( '/', _ID ) }>
									<svg className="back" role="img" title="Go back to the homepage">
										<use xlinkHref={ RelativeURL( 'assets/svg/sprite.svg#back', _ID ) }/>
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
							_ID={ _ID }
							pagetitle={ pagetitle }
							version={ version }
							city={ city }
							eventdescription={ eventdescription }
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

			<Scripts _ID={ _ID }/>
		</body>
	</html>
);

Event.propTypes = {};

Event.defaultProps = {};

export default Event;
