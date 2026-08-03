const CACHE_NAME = 'ok-squirl-v4';
const APP_SHELL = [
  '/',
  '/manifest.webmanifest',
  '/assets/ok-squirl/ok-squirl-favicon-192.png',
  '/assets/ok-squirl/ok-squirl-favicon-512.png',
  '/assets/ok-squirl/ok-squirl-mark-icon-only.png',
  '/assets/ok-squirl/ok-squirl-icon-breathe.svg',
  '/assets/ok-squirl/ok-squirl-icon-home.svg',
  '/assets/ok-squirl/ok-squirl-icon-journal.svg',
  '/assets/ok-squirl/01-blondie-wave.png',
  '/assets/ok-squirl/02-blondie-meditate.png',
  '/assets/ok-squirl/03-blondie-thoughtful.png',
  '/assets/ok-squirl/04-blondie-avatar.png',
  '/assets/ok-squirl/06-ok-squirl-light-background.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put('/', copy));
          return response;
        })
        .catch(() => caches.match('/'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') return response;
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      });
    })
  );
});
