import PropTypes from 'prop-types';
import Moment from 'moment';
import React from 'react';


const MakeDateTime = ( date, time ) => {
	const [ hour, minute ] = time.split(':');

	return Moment( date )
		.hour( parseInt( hour ) + 12 )
		.minute( minute );
};

/**
 * The content component
 */
const Event = ({
	_ID,
	_body,
	_parseMD,
	title,
	description,
	date,
	location,
	sponsors,
	link,
	speakers
}) => (
	<article className="dss-event" itemScope itemType="http://schema.org/Event">
		<h1 className="dss-event__heading" itemProp="name">{ title }</h1>

		<span itemProp="startDate" content={ MakeDateTime( date, speakers[ 0 ].time ).toString() }>
			{ MakeDateTime( date, speakers[ 0 ].time ).format('Do MMMM YYYY') }
		</span>

		{ location }

		<div itemProp="description">
			{ _parseMD( description ) }
		</div>

		<ul>
			{
				speakers.map( ( speaker, i ) => (
					<li key={ i }>
						{ speaker.time } - { speaker.name ? speaker.name : speaker.title }
						{ speaker.title && <p><strong>{ speaker.title }</strong></p> }
						{ speaker.description && _parseMD( speaker.description ) }
						{
							speaker.video &&
								<iframe width="560" height="315" src={ `https://www.youtube.com/embed/${ speaker.video }` } frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen><a href={ speaker.video }>Watch video</a></iframe> }
					</li>
				))
			}
		</ul>

		<div itemProp="offers" itemScope itemType="http://schema.org/Offer">
			<span itemProp="price" content="Free" />
			<span itemProp="priceCurrency" content="AUD" />
			<a itemProp="url" href={ link }>{ Date.parse( date ) < new Date() ? 'See past meetup event' : 'RSVP' }</a>
		</div>

		<h2>Sponsors</h2>
		{ sponsors }
	</article>
);

Event.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node,
};

Event.defaultProps = {};

export default Event;
