document.getElementById("count-el").innerText = 5;

// document.getElementById("count-el").innerText = 5;  | Yorum satırına alındı.

let sayac = 5; // Sayac adında bir değişken oluşturuldu ve değeri 5 olarak atandı.
console.log(sayac); // Konsola sayac değişkeninin değeri yazdırıldı.

let yas = 25; // Yas değişkeni tanımlandı ve değeri 25 olarak atandı.
console.log(yas); // yas değeri konsola yazdırıldı.

// Bu şekilde bir tanımlama olursa hata verecektir, ve çalışmayacaktır.
// console.log(yas);
// let yas = 25;

// let sayi1 = 23; // sayi 1 değeri 23 olarak atandı.
// let sayi2 = 52; // sayi 2 değeri 52 olarak atandı.
// let toplam = sayi1 + sayi2; // toplam değeri sayi1 ve sayi2'nin toplamı olarak atandı.
// console.log(toplam); // toplam değeri konsola yazdırıldı.

let insanyasi = 25; // insanyasi değişkeni 25 olarak atandı.
let kopekyasi = insanyasi * 7; // insan yaşı 7 ile çarpılarak köpek yaşı hesaplandı.
document.getElementById("count-el").innerText = kopekyasi; // kopek yaşı count-el id'li elemente yazdırıldı.

let dogumyili = 2008; // dogumyili değişkeni 2008 olarak atandı.
let simdikiyil = 2025; // simdikiyil değişkeni 2025 olarak atandı.
let simdikiyas = simdikiyil - dogumyili; // simdikiyas değişkeni simdikiyil ve dogumyili farkı olarak atandı.
console.log("Benim yaşım " + simdikiyas); // Konsola "Benim yaşım " ve simdikiyas değeri yazdırıldı.

// Ekrandan girilen iki sayının ortalamasını (bu sayıları toplayıp 2’ye bölecek) bulan programı yazınız
// let sayi1 = parseFloat(prompt("1. Sayı:"));
// let sayi2 = parseFloat(prompt("2. Sayı:"));
// let total = (sayi1 + sayi2) / 2;
// console.log("Girilen sayıların ortalaması" + total);

// Kenar uzunluğu değişkene atanarak, bir karenin alanını bulan programı yazınız (karenin alanı = kenar * kenar)
// let kenar_uzunlugu = 50;
// let alan = kenar_uzunlugu * kenar_uzunlugu;

// Ekrandan girilen Akım(I) ve Dirence(R) göre Gerilimi (V) hesaplayan programı yazınız.
// let akim = parseFloat(prompt("Akım değeri:"));
// let direnc = parseFloat(prompt("Direç değeri:"));
// let gerilim = akim * direnc;
// console.log("Gerilim değeri: " + gerilim);

// Bir ücretlinin çalışma saati ve saat ücreti bilgisayara giriş olarak veriliyor. Ücretlinin bu bilgilerle maaşını hesaplayan programı yazınız (maas=çalışma saati*saat ücreti)
// let ücretlinin_saati = 20;
// let calisma_saati = 40;
// let maas = ücretlinin_saati * calisma_saati;
// console.log("Çalışan Maaşı: " + maas);

// Bir otoparkta saatlik ücret tarifesi uygulanmaktadır. Saat başına 10 TL ücret alınmaktadır. Verilen saat değerine göre, toplam ödenmesi gereken ücreti yazdıran program kodunu yazınız.
// let otopark_ucreti = 10;
// let kalinan_saat = parseFloat(prompt("Otoparkta kaç saat kaldınız?"));
// let odenmesi_gereken = otopark_ucreti * kalinan_saat;
// console.log("Ödenmesi gereken ücret:" + odenmesi_gereken);

// Kullanıcı tarafından taban kenarı ve yükseklik değeri verilen bir dik üçgene ait alan hesaplaması yapan ve sonucu ekranda gösteren programı yazınız. alan = (taban* yükseklik)/2
// let taban = parseFloat(prompt("Dik üçgenin taban uzunluğu:"));
// let yukseklik = parseFloat(prompt("Dik üçgenin yüksekliği:"));
// let alan = (taban * yukseklik) / 2;
// console.log("Dik üçgenin alanı: " + alan);
