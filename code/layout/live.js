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
	footer,
	youtubeChannel,
	youtubeID,
	description,
	script,
	_ID,
	_nav,
	_pages,
	_store,
	_parseMD
}) => {
	return (
		<html>
			<Head _ID={ _ID } pagetitle={ pagetitle } eventdescription={description} image='livestream.png'/>

			<body className="homepage">
				<div className="wrapper wrapper-full">
					{ header }

					{ youtubeID
						? <main itemScope itemType="http://schema.org/Event">
							<div className="live">
								<iframe className="live-video" width="560" height="315" src={`https://www.youtube.com/embed/live_stream?channel=${youtubeChannel}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
								<iframe className="live-chat" width="420" height="630" src={`https://www.youtube.com/live_chat?v=${youtubeID}&embed_domain=designsystemmeetup.com`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

							</div>
							<p className="live-fallback">
								If you have trouble with the embedded option, use this link: <a href={`https://www.youtube.com/watch?v=${youtubeID}`} rel="external" target="_blank">https://www.youtube.com/watch?v={youtubeID}</a>
							</p>
						</main>
						: <p>No live stream planned yet</p>
					}
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

	/**
	 * youtubeChannel: UCMKyxLvZ1ZvtDZJUg2cWPXg
	 */
	youtubeChannel: PropTypes.string,

	/**
	 * youtubeID: kKAVMojibWU
	 */
	youtubeID: PropTypes.string,

	/**
	 * description: (text)(2)
	 */
	description: PropTypes.string,
};

export default Homepage;
