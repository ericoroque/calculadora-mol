const CACHE_NAME = 'molcalc-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192x192.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
  );
});
