const STATIC_CACHE = "static-v3";
const DYNAMIC_CACHE = "dynamic-v3";
const STATIC_ASSETS = [
  "/",
  "./index.html",
  "/app.js",
  "/styles.css",
  "./offline.html",
];

self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log("[SW] Pre-caching static assets");
      return cache.addAll(STATIC_ASSETS);
    }),
  );

  // İsteğe bağlı: yeni SW hemen aktif olsun
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((k) => k !== STATIC_CACHE && k !== DYNAMIC_CACHE)
          .map((k) => {
            console.log("[SW] Deleting old cache:", k);
            return caches.delete(k);
          }),
      );
    }),
  );

  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;

  // 1) HTML navigasyon istekleri (sayfalar)
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          // Başarılıysa, dinamik cache'e de kaydedelim
          const resClone = res.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(req, resClone);
          });
          return res;
        })
        .catch(() => {
          // Network yoksa veya hata varsa:
          return caches.match(req).then((cacheRes) => {
            // Bu sayfa daha önce cache'e alınmış olabilir
            if (cacheRes) return cacheRes;
            // Hiç yoksa, offline fallback göster
            return caches.match("/offline.html");
          });
        }),
    );
    return; // Bu durumda aşağıdaki kısma inmiyoruz
  }

  // 2) Diğer istekler (CSS, JS, resim vb.) → Cache First
  event.respondWith(
    caches.match(req).then((cacheRes) => {
      return cacheRes || fetch(req);
    }),
  );
});
