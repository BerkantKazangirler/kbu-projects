self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");

  event.waitUntil(
    caches.open("v1").then((cache) => {
      console.log("[SW] Pre-caching assets");
      return cache.addAll(["/", "/styles.css", "/index.html", "/app.js"]);
    }),
  );
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== "v1").map((k) => caches.delete(k)),
      );
    }),
  );

  event.waitUntil(self.clients.claim());
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((k) => k !== "v1").map((k) => caches.delete(k)),
      );
    }),
  );

  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      return cacheRes || fetch(event.request);
    }),
  );
});
