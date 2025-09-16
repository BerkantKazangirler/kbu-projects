document.getElementById("count-el").innerText = 5;

// document.getElementById("count-el").innerText = 5;  | Yorum satırına alındı.

let sayac = 5; // Sayac adında bir değişken oluşturuldu ve değeri 5 olarak atandı.
console.log(sayac); // Konsola sayac değişkeninin değeri yazdırıldı.

let yas = 25; // Yas değişkeni tanımlandı ve değeri 25 olarak atandı.
console.log(yas); // yas değeri konsola yazdırıldı.

// Bu şekilde bir tanımlama olursa hata verecektir, ve çalışmayacaktır.
// console.log(yas);
// let yas = 25;

let sayi1 = 23; // sayi 1 değeri 23 olarak atandı.
let sayi2 = 52; // sayi 2 değeri 52 olarak atandı.
let toplam = sayi1 + sayi2; // toplam değeri sayi1 ve sayi2'nin toplamı olarak atandı.
console.log(toplam); // toplam değeri konsola yazdırıldı.

let insanyasi = 25; // insanyasi değişkeni 25 olarak atandı.
let kopekyasi = insanyasi * 7; // insan yaşı 7 ile çarpılarak köpek yaşı hesaplandı.
document.getElementById("count-el").innerText = kopekyasi; // kopek yaşı count-el id'li elemente yazdırıldı.

let dogumyili = 2008; // dogumyili değişkeni 2008 olarak atandı.
let simdikiyil = 2025; // simdikiyil değişkeni 2025 olarak atandı.
let simdikiyas = simdikiyil - dogumyili; // simdikiyas değişkeni simdikiyil ve dogumyili farkı olarak atandı.
console.log("Benim yaşım " + simdikiyas); // Konsola "Benim yaşım " ve simdikiyas değeri yazdırıldı.
