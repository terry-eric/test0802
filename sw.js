self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('fox-store').then((cache) => cache.addAll([
        '/test0802/sytle.css',
        '/test0802/index.js',
      ])),
    );
  });
  
  self.addEventListener('fetch', (e) => {
    console.log(e.request.url);
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request)),
    );
  });