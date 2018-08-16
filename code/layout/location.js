import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Partial = ({
	name,
	address,
	description,
	map
}) => (
	<div itemProp="location" itemScope itemType="http://schema.org/Place">
		<span itemProp="name">{ name }</span>
		<div itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
			<span itemProp="streetAddress">{ address.street }</span><br/>
			<span itemProp="addressLocality">{ address.city }</span>, <span itemProp="addressRegion">{ address.state }</span> <span itemProp="postalCode">{ address.zip }</span>
		</div>
	</div>
);

Partial.propTypes = {
	/**
	 * _body: (test)(12)
	 */
	_body: PropTypes.node.isRequired,
};

Partial.defaultProps = {};

export default Partial;
