import { RelativeURL } from './helper.js';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Footer = ({ _body, _ID }) => (
	<footer className="wrapper">
		{ _body }
		<a className="sr-only" rel="me" href="https://mastodon.social/@wilkowskidom">Mastodon</a>
		<a className="iconText" href={`https://github.com/DesignSystemMeetup/design-system-website/blob/master/content/${ _ID }`}>
			<span className="iconText-text">Edit this page</span>

			<svg className="iconText-icon" role="img" title="Logo of GitHub">
				<use xlinkHref={ RelativeURL( 'assets/svg/sprite.svg#github', _ID ) }/>
			</svg>
		</a>
	</footer>
);

Footer.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Footer.defaultProps = {};

export default Footer;
