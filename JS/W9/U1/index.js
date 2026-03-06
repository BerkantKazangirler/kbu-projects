function login() {
  var kullaniciadi = document.getElementById("kadi").value;
  var sifre = document.getElementById("sifre").value;

  if (kullaniciadi === "Javascript" && sifre === "12345") {
    alert("Giriş başarılı!");
  } else {
    alert("Kullanıcı adı veya şifre yanlış.");
  }
}
