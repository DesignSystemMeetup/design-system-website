import PropTypes from 'prop-types';
import React from 'react';


/**
 * The partial component
 *
 * @disable-docs
 */
const Head = ({ _ID, _relativeURL, pagetitle }) => (
	<head>
		<title>{ pagetitle ? pagetitle : 'Design System meetup' }</title>

		<meta charSet="utf-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta httpEquiv="x-ua-compatible" content="ie=edge"/>

		<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
		<link rel="manifest" href="/site.webmanifest"/>
		<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000"/>
		<meta name="msapplication-TileColor" content="#000000"/>
		<meta name="theme-color" content="#ffffff"/>
		<meta name="msapplication-config" content='/assets/browserconfig.xml'/>
		<meta name="theme-color" content="#ffffff"/>
		<meta name="robots" content="index, follow"/>
		<meta name="author" content="Design System Meetup Sydney"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:title" content="Design System Meetup Sydney"/>
		<meta name="twitter:description" content="A meetup bringing together designers and developers"/>
		<meta name="twitter:name" content="Design System Meetup Sydney"/>
		<meta name="twitter:image" content="https://designsystemmeetup.com/assets/img/og-image.jpg"/>
		<meta property="og:type" content="website"/>
		<meta property="og:title" content="Design System Meetup Sydney"/>
		<meta property="og:site_name" content="Design System Meetup Sydney"/>
		<meta property="og:description" content="A meetup bringing together designers and developers"/>
		<meta property="og:image" content="https://designsystemmeetup.com/assets/img/og-image.jpg"/>
		<meta property="og:image:height" content="1175"/>
		<meta property="og:image:width" content="2244"/>
		<meta property="og:url" content="https://designsystemmeetup.com/"/>

		<link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet"/>
		<link rel="stylesheet" href={_relativeURL(`/assets/css/site.min.css`, _ID)}/>
	</head>
);

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
