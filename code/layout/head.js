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
		<meta name="robots" content="index, follow"/>
		<meta name="author" content="Dominik Wilkowski"/>
		<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png"/>
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png"/>
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png"/>
		<link rel="manifest" href="/assets/favicons/site.webmanifest"/>
		<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#0a0f2b"/>
		<link rel="shortcut icon" href="/assets/favicons/favicon.ico"/>
		<meta name="msapplication-TileColor" content="#0a0f2b"/>
		<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml"/>
		<meta name="theme-color" content="#ffffff"/>
		<meta property="og:image:height" content="1257"/>
		<meta property="og:image:width" content="2400"/>
		<meta property="og:site_name" content="Design System Meetup Sydney"/>
		<meta property="og:title" content="Design System Meetup"/>
		<meta property="og:description" content="Join us for all things Design System. From solving issues in multi platform environments to how we name things this is where we share what we've learned building large and small scale design systems. We meet every second Monday of every second month."/>
		<meta property="og:url" content="https://designsystemmeetup.com/"/>
		<meta property="og:image" content="https://designsystemmeetup.com/assets/img/og-image.jpg"/>
		<meta property="og:image:height" content="1257"/>
		<meta property="og:image:width" content="2400"/>
		<meta name="twitter:card" content="summary_large_image"/>
		<meta name="twitter:title" content="Design System Meetup Sydney"/>
		<meta name="twitter:description" content="Join us for all things Design System. From solving issues in multi platform environments to how we name things this is where we share what we've learned building large and small scale design systems. We meet every second Monday of every second month."/>
		<meta name="twitter:name" content="Design System Meetup Sydney"/>
		<meta name="twitter:image" content="https://designsystemmeetup.com/assets/img/og-image.jpg"/>
		<link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet"/>
		<link rel="stylesheet" href={_relativeURL(`/assets/css/site.min.css`, _ID)}/>
	</head>
);

Head.propTypes = {};

Head.defaultProps = {};

export default Head;
