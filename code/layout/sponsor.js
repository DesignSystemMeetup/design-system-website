import { RelativeURL } from './helper.js';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ name, link, description, logo, _parseMD, _ID }) => (
	<a className="sponsor" href={ link } rel="external">
		<img className="sponsor-img" src={ RelativeURL( logo, _ID ) } alt={`${ name } logo`}/>
		<div className="sponsor-desc">{ _parseMD( description ) }</div>
	</a>
);

Partial.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
