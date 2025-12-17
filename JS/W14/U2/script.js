const API_KEY = "9628b70203a83e348ffb277285015076";

const cityInput = document.getElementById("cityInput");
const btnWeather = document.getElementById("btnWeather");
const weatherResult = document.getElementById("weatherResult");

btnWeather.addEventListener("click", getWeather);

async function getWeather() {
  const city = cityInput.value.trim();

  // 3.1) Boş giriş kontrolü
  if (!city) {
    showError("Lütfen bir şehir adı girin.");
    return;
  }

  // 3.2) Yükleniyor mesajı
  weatherResult.classList.remove("hidden", "error");
  weatherResult.innerHTML = "Yükleniyor...";

  try {
    // 3.3) API URL'sini hazırlama
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&lang=tr&appid=${API_KEY}`;

    const response = await fetch(url);

    // 3.4) HTTP hata kontrolü
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(
          "Şehir bulunamadı. Lütfen geçerli bir şehir adı girin."
        );
      } else {
        throw new Error("Ağ hatası: " + response.status);
      }
    }

    const data = await response.json();

    // 3.5) Gelen veriden gerekli alanları çıkaralım
    // data.main.temp → sıcaklık
    // data.weather[0].description → açıklama
    // data.sys.country → ülke kodu
    // data.weather[0].icon → ikon kodu
    showWeather(data);
  } catch (error) {
    showError(error.message);
  }
}

function showWeather(data) {
  // Object destructuring ile parçalayalım:
  const cityName = data.name;
  const country = data.sys.country; // country
  const temp = data.main.temp; // temp
  const feelsLike = data.main.feels_like;
  const desc = data.weather[0].description; // description
  const iconCode = data.weather[0].icon; // icon

  // OpenWeather ikon URL formatı:
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  weatherResult.classList.remove("error");
  weatherResult.classList.remove("hidden");

  weatherResult.innerHTML = `
    <div class="result-header">
      <div>
        <div class="city">${cityName}</div>
        <div class="country">${country}</div>
      </div>
      <img class="icon" src="${iconUrl}" alt="${desc}">
    </div>
    <div class="temp">${Math.round(temp)}°C</div>
    <div class="desc">${desc}</div>
    <div class="extra">Hissedilen: ${Math.round(feelsLike)}°C</div>
  `;
}

function showError(message) {
  weatherResult.classList.remove("hidden");
  weatherResult.classList.add("error");
  weatherResult.innerHTML = message;
}
