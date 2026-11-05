const CACHE_NAME = "safranbolu-cache-v2";

const DOSYALAR = [
  "./",
  "./index.html",
  "./gezilecek.html",
  "./lezzetler.html",
  "./manifest.json",
  "./css/style.css",
  "./js/app.js",
  "./images/konak.jpg",
  "./images/cinci.jpg",
  "./images/lokum.jpg",
  "./images/safran-ev.jpg",
  "./images/safran.jpg",
  "./images/icon-128.png",
  "./images/icon-512.png",
];

// 1. INSTALL: Dosyaları önbelleğe kaydet
self.addEventListener("install", (event) => {
  console.log("Service Worker kuruluyor...");

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Dosyalar önbelleğe alınıyor.");
      return cache.addAll(DOSYALAR);
    }),
  );
});
// 2. ACTIVATE: Eski önbellekleri temizle
self.addEventListener("activate", (event) => {
  console.log("Service Worker aktifleşiyor.");

  event.waitUntil(
    caches
      .keys()
      .then((anahtarlar) => {
        return Promise.all(
          anahtarlar
            .filter(
              (ad) => ad.startsWith("safranbolu-cache-") && ad !== CACHE_NAME,
            )
            .map((ad) => caches.delete(ad)),
        );
      })
      .then(() => self.clients.claim()),
  );
});
// 3. FETCH: Önce önbellekten, yoksa ağdan getir
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Yalnızca aynı origin üzerindeki istekler
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(event.request).then((yanit) => {
      if (yanit) {
        console.log("Cache'den geldi:", url.pathname);
        return yanit;
      }

      console.log("Ağdan getiriliyor:", url.pathname);
      return fetch(event.request);
    }),
  );
});
