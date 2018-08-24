import PropTypes from 'prop-types';
import React, { Fragment } from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Scripts = ({ _ID, _relativeURL }) => (
	<Fragment>
		<script type="text/javascript" src={ _relativeURL( `/assets/js/svg4everybody.min.js`, _ID ) }/>
		<script>svg4everybody();</script>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
