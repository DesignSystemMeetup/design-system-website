const GetEvents = ( _pages ) => {
	let EVENTS = [];
	Object.entries( _pages )
		.map( page => {
			if( page[ 1 ].type === 'event' ) EVENTS.push( page[ 1 ] );
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
