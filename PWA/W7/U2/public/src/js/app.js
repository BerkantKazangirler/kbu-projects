if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((reg) => console.log("SW registered:", reg))
    .catch((err) => console.error(err));
}

document.getElementById("btn").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((r) => r.json())
    .then(
      (d) =>
        (document.getElementById("out").textContent = JSON.stringify(
          d,
          null,
          2,
        )),
    );
});
