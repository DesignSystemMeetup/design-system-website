import Moment from 'moment';
import Path from 'path';

const GetEvents = ( _pages ) => {
	const EVENTS = [];
	Object.entries( _pages )
		.map( ([ pageName, page ]) => {
			if( page.type === 'event' ) EVENTS.push( page );
		});

	return EVENTS
		.sort( ( b, a ) => ( Date.parse(a.date) < Date.parse(b.date) ) ? -1 : ( ( Date.parse(a.date) > Date.parse(b.date) ) ? 1 : 0 ) );
}

export const GetPastEvents = ( _pages ) => {
	return GetEvents( _pages )
		.filter( event => Date.parse( event.date ) < new Date());
};

export const GetFutureEvents = ( _pages ) => {
	return GetEvents( _pages )
		.filter( event => Date.parse( event.date ) > new Date());
};

export const MakeDateTime = ( date, time ) => {
	const [ hour, minute ] = time.split(':');

	return Moment( date )
		.hour( parseInt( hour ) + 12 )
		.minute( minute );
};


export const RelativeURL = ( URL, ID ) => {
	let relative = `${ Path.posix.relative( `/${ ID === 'index' ? '.' : ID }/`, `/${ URL }` ) }`;

	if(
		!relative.endsWith('.css') &&
		!relative.endsWith('.js') &&
		!relative.endsWith('.png') &&
		!relative.includes('.svg')
	) {
		relative = `${ relative }/`;
	}
	return relative;
}
