var sayacText = document.getElementById("sayi").innerText;
var sayac = parseInt(sayacText);

function sayiArttir() {
  sayac = sayac + 1;
  document.getElementById("sayi").innerText = sayac;
}

function sayiTopla(songul, serife, berkant, duran) {
  sayac = sayac + songul;
  console.log(sayac);

  document.getElementById("sayi").innerText = sayac;
}

function sayiAzalt() {
  sayac = sayac - 1;
  document.getElementById("sayi").innerText = sayac;
}

const data = function () {
  console.log("Data Fonksiyonu");
};

sayiArttir();
sayiTopla(5, 10, 20);
data();

var sayibutton = document.getElementById("btn1"); // Element | Eleman
var sayi = 50; // Değişken

sayibutton.value = 50; //
sayibutton.onclick = function () {
  console.log("Butona tıklandı");
};
// sayibutton.innerHTML += data.data; // Elementin içeriğini değiştirir
sayibutton.title = "Yeni Başlık"; // Elementin title özelliğini değiştirir
var deneme = document.getElementsByTagName("button"); // Elementleri alır

console.warn("Uyarı Metni");
console.error("Hata Metni");
console.log("Normal Metin");

if (ad == "Berkant") {
  console.log("Merhaba Berkant");
} else if (ad == "Songul") {
  console.log("Merhaba Songül");
} else {
  console.log("Sen Berkant değilsin");
}

if ((ad == "Berkant" && soyad == "Songul") || yas > 18) {
  console.log("Merhaba Berkant");
} else if (ad == "Songul") {
  console.log("Merhaba Songül");
}

for (let test = 0; test < 10; test++) {
  document.getElementById("sayi").innerHTML += "<br>" + test;
}

let dizi = ["Berkant", "Songul"];
let dizi2 = [
  { ad: "Berkant", soyad: "Duran" },
  { ad: "Songul", soyad: "Duran" },
];

dizi[0]; // Berkant
dizi2[0].ad; // Berkant

for (let i = 0; i < dizi2.length; i++) {
  console.log(dizi2[i].ad);
}

try {
} catch (error) {}