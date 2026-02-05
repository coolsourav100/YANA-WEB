const CACHE_NAME = 'yana-site-v1';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './privacy.html',
    './assets/icon.png',
    './assets/splash.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});
