import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({ _relativeURL, _body, _ID }) => (
	<a href={ _relativeURL( '/', _ID ) }>
		{
			_ID === 'index'
				? <h1>{ _body }</h1>
				: _body
		}
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
