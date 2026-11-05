const TASKS_URL = "https://jsonplaceholder.typicode.com/todos?_limit=10";
const TASK_UPDATE_URL = "https://jsonplaceholder.typicode.com/posts";
const TASK_QUEUE_DB = "task-queue";
const TASK_QUEUE_STORE = "pending-tasks";

document.getElementById("refresh").addEventListener("click", loadTasks);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./sw.js")
    .then((reg) => {
      console.log("[App] Service Worker Registered:", reg);
    })
    .catch((err) => {
      console.log("[App] Service Worker Registration Failed:", err);
    });
}

function loadTasks() {
  fetch(TASKS_URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`Task list failed with status ${res.status}`);
      }
      return res.json();
    })
    .then((tasks) => {
      const list = document.getElementById("taskList");
      list.innerHTML = "";
      tasks.forEach((t) => {
        const li = document.createElement("li");
        li.textContent = t.title + " ";

        const btn = document.createElement("button");
        btn.textContent = "Tamamlandı";
        btn.addEventListener("click", () => markTaskDone(t.id));

        li.appendChild(btn);
        list.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("[App] Tasks could not be loaded:", error);
      document.getElementById("taskList").innerHTML =
        "<li>⚠️ İnternet yok, cache kontrol ediliyor...</li>";
    });
}

loadTasks();

function markTaskDone(taskId) {
  const task = { taskId, done: true };

  fetch(TASK_UPDATE_URL, {
    method: "POST",
    body: JSON.stringify(task),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Task update failed with status ${response.status}`);
      }
      alert("Görev tamamlandı (online).");
    })
    .catch(async (error) => {
      console.error("[App] Task update queued:", error);
      await savePendingTask(task);

      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.ready;
          if ("sync" in registration) {
            await registration.sync.register("sync-tasks");
          }
        } catch (syncError) {
          console.error("[App] Background sync registration failed:", syncError);
        }
      }

      alert("Offline: Görev kuyruğa alındı. İnternet gelince senkronlanacak.");
    });
}

function openQueueDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(TASK_QUEUE_DB, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore(TASK_QUEUE_STORE, {
        keyPath: "id",
        autoIncrement: true,
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function savePendingTask(task) {
  const database = await openQueueDatabase();
  await new Promise((resolve, reject) => {
    const transaction = database.transaction(TASK_QUEUE_STORE, "readwrite");
    transaction.objectStore(TASK_QUEUE_STORE).add(task);
    transaction.oncomplete = resolve;
    transaction.onerror = () => reject(transaction.error);
  });
  database.close();
}
