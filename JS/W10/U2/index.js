var sayi = 15;

function arttir() {
  sayi = sayi + 1;
  document.getElementById("sonuc").innerHTML = sayi;
}

function azalt() {
  if (sayi > 0) sayi = sayi - 1;
  document.getElementById("sonuc").innerHTML = sayi;
}
