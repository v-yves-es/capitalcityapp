const CACHE_NAME = 'eu-capitals-v4';
const urlsToCache = [
  '/capitalcityapp/',
  '/capitalcityapp/index.html',
  '/capitalcityapp/styles.css',
  '/capitalcityapp/app.js',
  '/capitalcityapp/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache).catch(err => {
          console.log('Cache addAll error:', err);
        });
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => fetch(event.request))
  );
});
