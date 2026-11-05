console.log("[App] Çalışıyorum...");

// Service worker desteği var mı kontrol et
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => {
      console.log("[App] Service Worker Registered:", reg.scope);
    })
    .catch((err) => {
      console.log("[App] Service Worker Registration Failed:", err);
    });
}

// DOM elemanları
const loadBtn = document.getElementById("load-posts");
const postsList = document.getElementById("posts");
const statusEl = document.getElementById("posts-status");

function renderPosts(posts) {
  postsList.innerHTML = "";
  posts.forEach((post) => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postsList.appendChild(li);
  });
}
function setStatus(msg) {
  if (statusEl) {
    statusEl.textContent = msg;
  }
}

if (loadBtn) {
  loadBtn.addEventListener("click", () => {
    setStatus("Veriler yükleniyor...");

    // JSONPlaceholder API'den test verisi çekiyoruz
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ağ hatası: " + response.status);
        }
        return response.json();
      })
      .then((data) => {
        renderPosts(data);
        setStatus("Veriler başarıyla yüklendi.");
      })
      .catch((err) => {
        console.error(err);
        setStatus("Veriler yüklenemedi. İnternet bağlantınızı kontrol edin.");
      });
  });
}
