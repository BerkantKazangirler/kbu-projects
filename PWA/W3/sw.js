console.log("Service Worker dosyası yüklendi.");
self.addEventListener("install", function (event) {
  console.log("Service Worker: INSTALL olayı");
});
self.addEventListener("activate", function (event) {
  console.log("Service Worker: ACTIVATE olayı");
});
self.addEventListener("fetch", function (event) {
  console.log("Service Worker: FETCH -&gt;", event.request.url);
});
