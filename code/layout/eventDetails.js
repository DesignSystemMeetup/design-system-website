import { MakeDateTime } from './helper.js';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import Moment from 'moment';
import Nav from './nav.js';
import React, { Fragment } from 'react';


/**
 * The Event detail component
 */
const EventDetails = ({
	_relativeURL,
	_ID,
	_parseMD,
	pagetitle,
	version,
	city,
	eventdescription,
	date,
	location,
	sponsors,
	link,
	speakers
}) => (

	<article className="innerWrapper eventDetails">
		<div className="innerWrapper-left eventDetails-main">
			<ul className="schedule">
				{
					speakers.map( ( speaker, i ) => (
						<li className={`schedule-list schedule-list-${ i + 1 }`} key={ i } itemScope itemType="http://schema.org/Event">
							<svg className="schedule-shape">
								<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#shape${ i + 1 }`, _ID ) }/>
							</svg>

							<p className="schedule-headline">
								<span itemProp="startDate" content={ MakeDateTime( date, speaker.time ).format() }>
									{ speaker.time }
								</span> &mdash; {
									speaker.name
										? <span itemScope itemProp="author" itemType="http://schema.org/Person">
												<span itemProp="name">{ speaker.name }</span>
											</span>
										: <Fragment> { speaker.title }</Fragment>
								}
							</p>

							{ speaker.title && <h2 className="heading-small heading--shade" itemProp="name">{ speaker.title }</h2> }
							{ speaker.description && <div className="schedule-desc">{ _parseMD( speaker.description ) }</div> }
							{
								speaker.video &&
									<div className="video-container">
										<iframe width="560" height="315" src={ `https://www.youtube.com/embed/${ speaker.video }` } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
											<a href={ speaker.video }>
												Watch video
											</a>
										</iframe>
									</div>
							}
						</li>
					))
				}
			</ul>
		</div>

		<div className="innerWrapper-right eventDetails-details details">
			<div className="details-desc" itemProp="description">{ _parseMD( eventdescription ) }</div>

			<h2 className="heading-small heading--shade-side">Venue</h2>
			{ location }

			<h2 className="heading-small heading--shade-side">Sponsors (Bloody legends)</h2>
			{ sponsors }
		</div>

	</article>
);

EventDetails.propTypes = {};

EventDetails.defaultProps = {};

export default EventDetails;
