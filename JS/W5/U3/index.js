function kareAl(a) {
  sayi = a.value;
  sonuc = sayi * sayi;
  document.getElementById("sonuc").innerHTML = sonuc;
}

function küpAl() {
  sayi = document.getElementById("sayi").value;
  sonuc = sayi * sayi * sayi;
  document.getElementById("sonuc2").innerHTML = sonuc;
}

function yariAl() {
  sayi = document.getElementById("sayi2").value;
  sonuc = sayi / 2;
  document.getElementById("sonuc3").innerHTML = sonuc;
}

function topla() {
  sayi1 = parseFloat(document.getElementById("sayi3").value);
  sayi2 = parseFloat(document.getElementById("sayi4").value);
  sonuc = sayi1 + sayi2;
  document.getElementById("sonuc4").innerHTML = sonuc;
}
