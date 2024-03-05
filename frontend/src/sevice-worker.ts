// service-worker.ts

const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/index.css',
];

self.addEventListener('install', (event: any) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event: any) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('updatefound', (event: any) => {
    const installingWorker = event?.target?.installer;
    installingWorker?.addEventListener('statechange', () => {
        if (installingWorker.state === 'installed') {
            // @ts-ignore
            self.skipWaiting();
            console.log('New content is available; please refresh.');
        }
    });
});
