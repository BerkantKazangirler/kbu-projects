self.addEventListener("install", (event) => {
  console.log("[SW] Installing...", event);
  self.skipWaiting(); // LAB için hemen etkinleşsin
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activating...", event);
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  console.log("[SW] Fetch event yakalandı:", event.request.url);

  event.respondWith(fetch(event.request));
  // event.respondWith(
  //   new Response(
  //     "Merhaba, bu yanıt tamamen Service Worker tarafından oluşturuldu!",
  //     {
  //       headers: { "Content-Type": "text/plain" },
  //     },
  //   ),
  // );

  // event.respondWith(null);
});
