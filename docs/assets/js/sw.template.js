self
	.oninstall = event => {
		event
			.waitUntil( caches
				.open( {{NAME}} )
				.then( cache => {
					return cache.addAll([ {{FILES}} ]);
			})
		);

	// replaces the old SW automatically
	self.skipWaiting();
};

self
	.onactivate = event => {
		event
			.waitUntil( caches
				.keys()
				.then( cacheNames => {
					const deleteOldCaches = cacheNames.map( cacheName => {
						if ( cacheName !== {{NAME}} ) {
							return caches.delete( cacheName );
						}
						// Leave the current cache alone
					});

					//removing old cache
					return Promise.all( deleteOldCaches );
				}
			)
		);

		//ensures all open tabs use new service worker
		self.clients.claim();
};

self
	.addEventListener('fetch', event => {
		if( event.request.method !== 'POST' ) {
			event.respondWith(
				caches
					.open( {{NAME}} )
					.then( cache => cache
						.match( event.request ) // checks if it's in cache
						.then( cacheResponse => {
							// fetches latest resource from server
							const fetchPromise = fetch( event.request )
								.then( networkResponse => {
									cache.put(event.request, networkResponse.clone());
									return networkResponse;
							});

							return cacheResponse || fetchPromise;
					})
			)
			.catch( error => console.error( error ) )
		);
	}
});
