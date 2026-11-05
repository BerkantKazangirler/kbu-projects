// INSTALL
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");
  self.skipWaiting(); // Lab için hızlı aktivasyon
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  console.log("[SW] Activated!");
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  console.log("[SW] Fetch yakalandı:", event.request.url);

  event.respondWith(fetch(event.request));
});
