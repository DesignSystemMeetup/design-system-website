self.oninstall = evt => {
	evt.waitUntil(
		caches.open($name).then(cache => {
			return cache.addAll($filesToCache);
		})
	);

	// replaces the old SW automatically
	self.skipWaiting();
};

self.onactivate = evt => {
	evt.waitUntil(
		caches
		.keys()
		.then((cacheNames) => {
			const deleteOldCaches = cacheNames.map((cacheName) => {
				if (cacheName !== $name){
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


self.onfetch = evt => {
	evt.respondWith(
		caches.open($name).then(function(cache) {

			//checks if it's in cache
			return cache.match(evt.request).then(function(cacheResponse) {

			  // fetches latest resource from server
			  var fetchPromise = fetch(evt.request).then(function(networkResponse) {
				cache.put(evt.request, networkResponse.clone());
				return networkResponse;
			  })
			  return cacheResponse || fetchPromise;
			})
		})
	);
};
