self.oninstall = event => {
	event.waitUntil(
		caches.open({{NAME}}).then(cache => {
			return cache.addAll([{{filesToCache}}]);
		})
	);

	// replaces the old SW automatically
	self.skipWaiting();
};

self.onactivate = event => {
	event.waitUntil(
		caches
		.keys()
		.then((cacheNames) => {
			const deleteOldCaches = cacheNames.map((cacheName) => {
				if (cacheName !== {{NAME}}){
					return caches.delete(cacheName);
				}
				// Leave the current cache alone
			});

			//removing old cache
			return Promise.all(deleteOldCaches);
		})
	)

	//ensures all open tabs use new service worker
	self.clients.claim();

};

self.onfetch = event => {
	event.respondWith(
		caches.open({{NAME}}).then(function(cache) {

			//checks if it's in cache
			return cache.match(event.request).then(function(cacheResponse) {

			  	// fetches latest resource from server
				var fetchPromise = fetch(event.request).then(function(networkResponse) {
					cache.put(event.request, networkResponse.clone());
					return networkResponse;
				})
				return cacheResponse || fetchPromise;
			})
		})
	);
};
