function boyutlandir() {
  document.getElementById("resim").style.width = "300px";
  document.getElementById("resim").style.height = "300px";
}

function boyutlandirma() {
  document.getElementById("resim").style.width = "450px";
  document.getElementById("resim").style.height = "450px";
}

function rastgeleBoyutlandir() {
  let rastgeleSayi = Math.floor(Math.random() * 100) + 100;
  document.getElementById("resim").style.width = rastgeleSayi + "px";
  document.getElementById("resim").style.height = rastgeleSayi + "px";
}
