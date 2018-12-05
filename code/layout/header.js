import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _relativeURL, _body, _ID }) => (
	<header role="banner">
		<a className="logo" href={ _relativeURL( '/', _ID ) }>
			<svg className="logo" role="img" title="Logo of the Design System Meetup">
				<use xlinkHref={ _relativeURL( 'assets/svg/sprite.svg#logo', _ID ) }/>
			</svg>
		</a>

		<svg className="banner" role="img" title="A banner with different shapes symbolizing the modular nature of Design Systems">
			<use xlinkHref={ _relativeURL( `assets/svg/sprite.svg#${ _ID === 'index' ? 'header-homepage' : 'header-events' }`, _ID ) }/>
		</svg>
	</header>
);

Partial.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
