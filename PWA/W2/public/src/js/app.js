console.log("Uygulama çalıştı ✅");

// Test butonu örneği
const btn = document.getElementById("testBtn");
if (btn) {
  btn.addEventListener("click", () => {
    alert("Butona tıkladın, her şey yolunda! 🎉");
  });
}

// Service Worker kaydı (ileride kullanacağız)
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => {
      console.log("Service Worker kaydedildi:", reg.scope);
    })
    .catch((err) => {
      console.log("Service Worker kaydı başarısız:", err);
    });
}
