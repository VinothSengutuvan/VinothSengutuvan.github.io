var cacheName = 'style-Guide';
var filesToCache = [
  '/index.html',
  '/css/reset.css',
  '/css/pwa-style.css',
  '/js/actions.js',
  '/js/jquery-1.10.2.min.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    }).catch((err) =>{
      console.log(err);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    }).catch((err) =>{
      console.log(err);
    })
  );
});