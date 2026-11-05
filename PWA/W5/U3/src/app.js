console.log("[App] Çalışıyorum...");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => {
      console.log("[App] Service Worker Registered:", reg);
    })
    .catch((err) => {
      console.log("[App] Service Worker Registration Failed:", err);
    });
}
