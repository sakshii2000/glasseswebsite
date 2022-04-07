const cacheName = 'pwa-conf-v1';
const staticAssets = [
  './',
  'index.html',
  'script.js',
  'style.css',
  'about.html',
  'blogs.html',
  'cart.html',
  'contact.html',
  'login.html',
  'products.html',
  'register.html',
];

self.addEventListener('install', async event => {
  const cache = await caches.open(cacheName); 
  await cache.addAll(staticAssets); 
});

self.addEventListener('fetch', event => {
  const req = event.request;
  event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName); 
  const cachedResponse = await cache.match(req); 
  return cachedResponse || fetch(req); 
}
