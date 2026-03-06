const sepet = [
  { ad: "Mouse", fiyat: 300, kategori: "Elektronik" },
  { ad: "Kulaklık", fiyat: 150, kategori: "Elektronik" },
  { ad: "Kalem", fiyat: 30, kategori: "Kırtasiye" },
];

// 1) Tümünü listele
document.getElementById("tum").textContent = sepet
  .map((item) => item.ad)
  .join(", ");

// 2) Elektronik ürünler
const elektronik = sepet.filter((item) => item._________ === "Elektronik");
document.getElementById("elektronik").textContent = elektronik
  .map((e) => e.ad)
  .join(", ");

// 3) KDV ekle (map + destructuring)
const kdvli = sepet.map(({ fiyat }) => fiyat * 1.2);
document.getElementById("kdvli").textContent = kdvli;

// 4) Toplam fiyat hesapla
const toplam = sepet.map((item) => item.fiyat).reduce((a, b) => a + b);
const indirim = toplam > 400 ? "İndirim uygulanabilir" : "İndirim yok";

document.getElementById("indirimDurum").textContent = indirim;
