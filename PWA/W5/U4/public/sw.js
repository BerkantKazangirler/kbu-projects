// Cache isimleri
const STATIC_CACHE = "static-v3";
const DYNAMIC_CACHE = "dynamic-v3";
const API_CACHE = "api-v1";

// Statik varlıklar (her zaman cache'lemek istediklerimiz)
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/src/css/styles.css",
  "/offline.html",
  "/src/js/app.js",
  "/src/icons/128.png",
  "/src/icons/256.png",
  // "/src/manifest.webmanifest",
];

// Install – statik varlıkları önbelleğe al
self.addEventListener("install", (event) => {
  console.log("[SW] Installing...");

  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      console.log("[SW] Pre-caching static assets");
      return cache.addAll(STATIC_ASSETS);
    }),
  );

  // Yeni SW'yi hemen aktif etmeye çalış
  self.skipWaiting();
});

// Activate – eski cache'leri temizle
self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...");

  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter(
            (k) => k !== STATIC_CACHE && k !== DYNAMIC_CACHE && k !== API_CACHE,
          )
          .map((k) => {
            console.log("[SW] Deleting old cache:", k);
            return caches.delete(k);
          }),
      );
    }),
  );

  event.waitUntil(self.clients.claim());
});

// Fetch – API + HTML + diğer varlıklar için farklı stratejiler
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = req.url;

  // 1) API istekleri: Network-First + Cache Fallback
  if (url.includes("jsonplaceholder.typicode.com/posts")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(API_CACHE).then((cache) => {
            cache.put(req, resClone);
          });
          return res;
        })
        .catch(() => {
          // Network yoksa daha önce cache'lenmiş yanıtı dön
          return caches.match(req);
        }),
    );
    return;
  }

  // 2) HTML sayfaları (navigasyon): Network-First + Dynamic Cache + Offline Fallback
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(req, resClone);
          });
          return res;
        })
        .catch(() => {
          return caches.match(req).then((cacheRes) => {
            if (cacheRes) return cacheRes;
            return caches.match("/offline.html");
          });
        }),
    );
    return;
  }

  // 3) Diğer istekler (CSS, JS, resimler): Cache-First
  event.respondWith(
    caches.match(req).then((cacheRes) => {
      return cacheRes || fetch(req);
    }),
  );
});
