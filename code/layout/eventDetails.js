import { MakeDateTime } from './helper.js';
import { RelativeURL } from './helper.js';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Scripts from './scripts.js';
import Head from './head.js';
import Moment from 'moment';

/**
 * The Event detail component
 */
const EventDetails = ({
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
		{ speakers
			? <Fragment>
					<div className="innerWrapper-left eventDetails-main">
						<ul className="schedule">
							{
								speakers.map( ( speaker, i ) => (
									<li className={`schedule-list schedule-list-${ i + 1 }`} key={ i } itemScope itemType="http://schema.org/Event">
										<svg className="schedule-shape">
											<use xlinkHref={ RelativeURL( `assets/svg/sprite.svg#shape${ i + 1 }`, _ID ) }/>
										</svg>

										<p className="schedule-headline">
											<span itemProp="startDate" content={ MakeDateTime( date, speaker.time ).format() }>
												{ speaker.time }
											</span>
											{
												speaker.name
													&& <Fragment> &mdash; <span itemScope itemProp="author" itemType="http://schema.org/Person">
															<span itemProp="name">{ speaker.name }</span>
														</span></Fragment>
											}
										</p>

										{ speaker.title && <h2 className="heading-small heading--shade" itemProp="name">{ speaker.title }</h2> }
										{ speaker.description && <div className="schedule-desc">{ _parseMD( speaker.description ) }</div> }
										{
											speaker.youtube &&
												<div className="video-container">
													<iframe width="560" height="315" src={ `https://www.youtube.com/embed/${ speaker.youtube }` } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
														<a href={ speaker.youtube }>
															Watch video
														</a>
													</iframe>
												</div>
										}
										{
											speaker.vimeo &&
												<div className="video-container">
													<iframe
														width="560"
														height="315"
														src={`https://player.vimeo.com/video/${ speaker.vimeo }`}
														style={{
															position: 'absolute',
															top: 0,
															left: 0,
															width: '100%',
															height: '100%',
														}}
														frameBorder="0"
														allowFullScreen
													>
														<a href={`https://vimeo.com/${ speaker.vimeo }`}>Watch video</a>
													</iframe>
													<script src="https://player.vimeo.com/api/player.js"/>
												</div>
										}
									</li>
								))
							}
						</ul>
					</div>

					<div className="innerWrapper-right eventDetails-details details">

						<div className="details-desc" itemProp="description">{ _parseMD( eventdescription ) }</div>
						<a href={ RelativeURL( '/code-of-conduct/', _ID ) }>Code of Conduct</a>

						<h2 className="heading-small heading--shade-side">Venue</h2>
						{ location }

						<h2 className="heading-small heading--shade-side">Sponsors (Bloody legends)</h2>
						{ sponsors }
					</div>
				</Fragment>
			: <Fragment>
					<div className="innerWrapper-left eventDetails-main">
						<ul className="schedule">
							<li className="schedule-list schedule-list-4">
								<svg className="schedule-shape">
									<use xlinkHref={ RelativeURL( `assets/svg/sprite.svg#shape4`, _ID ) }/>
								</svg>

								<h2 className="heading-small heading--shade-side">We are looking for you</h2>

								<p>
									Get in contact with us if you'd like to talk at our next meetup.<br/>
									Send us a message at <a href="mailto:talks@designsystemmeetup.com">talks@designsystemmeetup.com</a> or
									submit a talk proposal to <a href="https://beta.cete.io/designsystemmeetup" rel="external" target="_blank">cete.io</a>.
								</p>
							</li>
						</ul>
					</div>
					<div className="innerWrapper-right eventDetails-details details">
						<a href={ RelativeURL( '/code-of-conduct/', _ID ) }>Code of Conduct</a>
					</div>
				</Fragment>
		}

	</article>
);

EventDetails.propTypes = {};

EventDetails.defaultProps = {};

export default EventDetails;
