var sayacText = document.getElementById("sayi").innerText;
var sayac = parseInt(sayacText);

function sayiArttir() {
  sayac = sayac + 1;
  document.getElementById("sayi").innerText = sayac;
}

function sayiAzalt() {
  sayac = sayac - 1;
  document.getElementById("sayi").innerText = sayac;
}
