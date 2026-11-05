// Şimdilik sadece SW'nin yüklendiğini görmek için basit log:
self.addEventListener("install", (event) => {
  console.log("[SW] Service Worker kuruldu (install).");
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Service Worker aktifleştirildi (activate).");
});
