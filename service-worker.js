const CACHE_NAME = "ride-hailing-app-v1";
const urlsToCache = [
  "./",
  "./index.html",
  "./styles.css",
  "./car.png",
  "./manifest.json",
  "./splashscreen.js",
  "https://unpkg.com/leaflet@1.7.1/dist/leaflet.css",
  "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
];

// Install Service Worker
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch and serve cached content
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
