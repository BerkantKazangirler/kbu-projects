var ekranDegeri = "0";

function ekraniGuncelle() {
  var ekran = document.getElementById("total");
  ekran.innerHTML = ekranDegeri;
}

function sayiEkle(sayi) {
  if (ekranDegeri == "0") {
    ekranDegeri = sayi;
  } else {
    ekranDegeri = ekranDegeri + sayi;
  }
  ekraniGuncelle();
}

function operatorEkle(operator) {
  ekranDegeri = ekranDegeri + operator;
  ekraniGuncelle();
}

function temizle() {
  ekranDegeri = "0";
  ekraniGuncelle();
}

function sil() {
  if (ekranDegeri.length > 1) {
    ekranDegeri = ekranDegeri.slice(0, -1);
  } else {
    ekranDegeri = "0";
  }
  ekraniGuncelle();
}

function hesapla() {
  try {
    var sonuc = eval(ekranDegeri);
    ekranDegeri = sonuc.toString();
    ekraniGuncelle();
  } catch (error) {
    ekranDegeri = "Hata";
    ekraniGuncelle();
  }
}
