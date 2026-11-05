const durum = document.getElementById("durum");
const gunluk = document.getElementById("gunluk");
function mesajYaz(mesaj) {
  const li = document.createElement("li");
  li.textContent = mesaj;
  gunluk.appendChild(li);
  console.log(mesaj);
}

async function serviceWorkerKaydet() {
  if (!("serviceWorker" in navigator)) {
    durum.textContent = "Service Worker desteklenmiyor.";
    mesajYaz("Tarayıcı Service Worker desteklemiyor.");
    return;
  }
  try {
    const kayit = await navigator.serviceWorker.register("./sw.js");
    durum.textContent = "Service Worker kaydedildi.";
    mesajYaz("Kayıt başarılı!");
    mesajYaz("Kapsam: " + kayit.scope);
  } catch (hata) {
    durum.textContent = "Kayıt başarısız.";
    mesajYaz("Hata: " + hata.message);
  }
}

async function serviceWorkerKontrol() {
  if (!("serviceWorker" in navigator)) {
    mesajYaz("Service Worker desteklenmiyor.");
    return;
  }
  const kayit = await navigator.serviceWorker.getRegistration("./");
  if (!kayit) {
    mesajYaz("Service Worker kaydı bulunamadı.");
    return;
  }
  mesajYaz("Service Worker kaydı mevcut.");
  if (kayit.installing) mesajYaz("Durum: Installing");
  else if (kayit.waiting) mesajYaz("Durum: Waiting");
  else if (kayit.active) mesajYaz("Durum: Active");
  mesajYaz(
    navigator.serviceWorker.controller
      ? "Bu sayfa Service Worker kontrolünde."
      : "Bu sayfa henüz kontrol edilmiyor.",
  );
}

async function serviceWorkerKaldir() {
  if (!("serviceWorker" in navigator)) return;
  const kayit = await navigator.serviceWorker.getRegistration("./");
  if (kayit) {
    const sonuc = await kayit.unregister();
    mesajYaz(
      sonuc ? "Service Worker kaydı kaldırıldı." : "Kayıt kaldırılamadı.",
    );
    durum.textContent = "Kayıt kaldırıldı.";
  } else {
    mesajYaz("Kaldırılacak kayıt bulunamadı.");
  }
}

document
  .getElementById("kontrolBtn")
  .addEventListener("click", serviceWorkerKontrol);
document
  .getElementById("kaldirBtn")
  .addEventListener("click", serviceWorkerKaldir);
window.addEventListener("load", serviceWorkerKaydet);
