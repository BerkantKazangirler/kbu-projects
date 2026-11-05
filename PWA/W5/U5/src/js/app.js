console.log("[App] Çalışıyor...");

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => console.log("[App] SW registered:", reg))
    .catch((err) => console.error("[App] SW registration failed:", err));
}

document.getElementById("load-data").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("output").textContent = JSON.stringify(
        data,
        null,
        2,
      );
    })
    .catch((e) => {
      document.getElementById("output").textContent = "Hata: " + e;
    });
});
