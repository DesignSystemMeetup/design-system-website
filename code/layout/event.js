import React from 'react';
import PropTypes from 'prop-types';

/**
 * The content component
 */
const Event = ({
	_ID,
	_body,
	_self,
	date,
	host,
	address,
	meetup,
	_store,
	_storeSet
}) => {
	const store = _store();
	_storeSet({ [_self]: { host, date, address } });
	return (
		<article id={_self} className="dss-event">
			<h3 className="dss-event__heading">{date} - {host}</h3>
			<article className="dss-event__meta">
				<p>
					Location:{' '}
					<a
						title={`Directions to ${address}`}
						href={`https://www.google.com/maps/search/?api=1&query=${encodeURI(address)}+au`}
					>
						{address} [map]
					</a>
				</p>
			</article>
			{meetup && (
				<article>
					<a className="dss-event__button" href={meetup}>
						Register
					</a>
				</article>
			)}

			<section>
				<h4>Details</h4>
				{_body}
			</section>
		</article>
	);
};

Event.propTypes = {
	/**
	 * _body: (partials)(4)
	 */
	_body: PropTypes.node.isRequired
};

Event.defaultProps = {};

export default Event;
