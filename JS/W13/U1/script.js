// GÖREV 1: Tek gönderi getirme (then/catch ile)
const btnPost = document.getElementById("btnPost");
const postResult = document.getElementById("postResult");

btnPost.addEventListener("click", () => {
  postResult.textContent = "Yükleniyor...";

  fetch("https://jsonplaceholder.typicode.com/posts/1") // URL
    .then((response) => {
      if (!response.ok) {
        throw new Error("Ağ hatası: " + response.status);
      }
      return response.json(); // JSON'a çevir
    })
    .then((data) => {
      // data.title ve data.body'yi kullan
      postResult.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.body}</p>
      `;
    })
    .catch((error) => {
      postResult.textContent = "Hata: " + error.message;
    });
});

// GÖREV 2: Kullanıcı listesi getirme
const btnUsers = document.getElementById("btnUsers");
const userList = document.getElementById("userList");

btnUsers.addEventListener("click", () => {
  userList.innerHTML = "<li>Yükleniyor...</li>";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => {
      userList.innerHTML = "";

      users.forEach((user) => {
        // user.name ve user.email
        const li = document.createElement("li");
        li.textContent = user.name + " – " + user.email;
        userList.appendChild(li);
      });
    })
    .catch((err) => {
      userList.innerHTML = "<li>Hata: " + err.message + "</li>";
    });
});

// GÖREV 3: Belirli kullanıcıya ait TODO listesi
const userIdInput = document.getElementById("userIdInput");
const btnTodos = document.getElementById("btnTodos");
const todoList = document.getElementById("todoList");

btnTodos.addEventListener("click", () => {
  const userId = userIdInput.value;

  if (!userId) {
    alert("Lütfen bir kullanıcı ID girin!");
    return;
  }

  todoList.innerHTML = "<li>Yükleniyor...</li>";

  const url = "https://jsonplaceholder.typicode.com/todos?userId=" + userId;

  fetch(url)
    .then((res) => res.json())
    .then((todos) => {
      todoList.innerHTML = "";

      todos.forEach((todo) => {
        const li = document.createElement("li");
        li.textContent = todo.title;

        if (todo.completed) {
          li.classList.add("todo-done");
        } else {
          li.classList.add("todo-pending");
        }

        todoList.appendChild(li);
      });
    })
    .catch((err) => {
      todoList.innerHTML = "<li>Hata: " + err.message + "</li>";
    });
});

// GÖREV 4: async/await ile fetch (bonus)
const btnPostAsync = document.getElementById("btnPostAsync");
const postAsyncResult = document.getElementById("postAsyncResult");

btnPostAsync.addEventListener("click", getPostAsync);

async function getPostAsync() {
  postAsyncResult.textContent = "Yükleniyor...";

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/2"
    );
    if (!response.ok) {
      throw new Error("Ağ hatası: " + response.status);
    }

    const data = await response.json();

    postAsyncResult.innerHTML = `
      <h3>${data.title}</h3>
      <p>${data.body}</p>
    `;
  } catch (error) {
    postAsyncResult.textContent = "Hata: " + error.message;
  }
}
