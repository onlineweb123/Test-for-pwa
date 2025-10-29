self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('maathu-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'icons/icon-192.png',
        'icons/icon-512.png'
      ]);
    })
  );
  console.log('🛠️ Service Worker Installed');
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});