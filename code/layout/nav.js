import { GetPastEvents, GetFutureEvents } from './helper.js';
import PropTypes from 'prop-types';
import React from 'react';


const Nav = ({ _ID, _pages, _relativeURL }) => {
	const futureEvents = GetFutureEvents( _pages );
	const pastEvents = GetPastEvents( _pages );

	return (
		<aside>
			<nav>
				<strong>Upcoming meetup</strong>
				<ul>
					{
						futureEvents.map( ( event, i ) => (
							<li key={ i }>
								<a href={ _relativeURL( event._url, _ID ) }>{ event.pagetitle }</a>
							</li>
						))
					}
				</ul>

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
			</nav>
		</aside>
	);
};


Nav.propTypes = {
	_ID: PropTypes.string.isRequired,
	_pages: PropTypes.object.isRequired,
};

export default Nav;
