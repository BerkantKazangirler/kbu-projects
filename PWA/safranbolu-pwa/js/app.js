function baglantiKontrol() {
  const alan = document.getElementById("baglanti");

  if (navigator.onLine) {
    alan.textContent = "Durum: Çevrimiçi";
  } else {
    alan.textContent = "Durum: Çevrimdışı";
  }
}
async function serviceWorkerKaydet() {
  const alan = document.getElementById("swDurum");

  if (!("serviceWorker" in navigator)) {
    alan.textContent = "Service Worker desteklenmiyor.";
    return;
  }

  try {
    const kayit = await navigator.serviceWorker.register("./sw.js");

    console.log("Service Worker kaydedildi.");
    console.log("Kapsam:", kayit.scope);

    alan.textContent = "Service Worker kaydedildi. Hazırlanıyor...";

    await navigator.serviceWorker.ready;

    alan.textContent = "Service Worker aktif ve hazır.";

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      console.log("Yeni Service Worker kontrolü aldı.");
    });
  } catch (hata) {
    console.error("Service Worker hatası:", hata);
    alan.textContent = "Service Worker kayıt hatası.";
  }
}

window.addEventListener("online", baglantiKontrol);
window.addEventListener("offline", baglantiKontrol);

baglantiKontrol();
serviceWorkerKaydet();
