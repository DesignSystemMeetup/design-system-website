import { RelativeURL } from './helper.js';
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


/**
 * The partial component
 *
 * @disable-docs
 */
const Scripts = ({ _ID }) => (
	<Fragment>
		<script src="https://www.googletagmanager.com/gtag/js?id=UA-23571257-4"></script>
		<script type="text/javascript" src={ RelativeURL( `/assets/js/script.min.js`, _ID ) }/>
	</Fragment>
);

Scripts.propTypes = {};

Scripts.defaultProps = {};

export default Scripts;
