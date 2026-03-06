function kontrol() {
  let netler = document.getElementById("netler").value;
  if (netler < 0) {
    document.getElementById("ekran").innerText = "Geçersiz Sayı";
  } else if (netler < 10) {
    document.getElementById("ekran").innerText = "Net Sayınız Ortalama Altında";
  } else if (netler < 25) {
    document.getElementById("ekran").innerText = "Net Sayınız Ortalamaya Yakın";
  } else if (netler <= 40) {
    document.getElementById("ekran").innerText =
      "Net Sayınız Ortalamanın Üstünde";
  } else {
    document.getElementById("ekran").innerText =
      "Lütfen Geçerli Bir Not Giriniz";
  }
}
