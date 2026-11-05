const STATIC_CACHE = "static-v1";
const DYNAMIC_CACHE = "dynamic-v1";

const STATIC_FILES = [
  "/",
  "/index.html",
  "/offline.html",
  "/src/css/styles.css",
  "/src/js/app.js",
];
const TASK_UPDATE_URL = "https://jsonplaceholder.typicode.com/posts";
const TASK_QUEUE_DB = "task-queue";
const TASK_QUEUE_STORE = "pending-tasks";

// INSTALL
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_FILES)),
  );
  self.skipWaiting();
});

// ACTIVATE
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== STATIC_CACHE && k !== DYNAMIC_CACHE)
            .map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

// FETCH
self.addEventListener("fetch", (event) => {
  const apiURL = "https://jsonplaceholder.typicode.com/todos";

  // API → Network First
  if (event.request.url.includes(apiURL)) {
    return event.respondWith(
      fetch(event.request)
        .then((res) => {
          if (res.ok) {
            const clone = res.clone();
            caches
              .open(DYNAMIC_CACHE)
              .then((cache) => cache.put(event.request, clone));
          }
          return res;
        })
        .catch(() => caches.match(event.request)),
    );
  }

  // Static File → Cache First
  if (STATIC_FILES.includes(event.request.url.replace(location.origin, ""))) {
    return event.respondWith(caches.match(event.request));
  }

  // Everything else → Network fallback to cache → offline.html
  event.respondWith(
    fetch(event.request).catch(() =>
      caches
        .match(event.request)
        .then((res) => res || caches.match("/offline.html")),
    ),
  );
});

// BACKGROUND SYNC
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-tasks") {
    event.waitUntil(syncPendingTasks());
  }
});

function syncPendingTasks() {
  console.log("[SW] Pending tasks sync triggered.");

  return getPendingTasks().then((tasks) =>
    tasks.reduce(
      (chain, task) =>
        chain.then(() =>
          fetch(TASK_UPDATE_URL, {
            method: "POST",
            body: JSON.stringify(task),
            headers: { "Content-Type": "application/json" },
          }).then((response) => {
            if (!response.ok) {
              throw new Error(`Task sync failed with status ${response.status}`);
            }
            return removePendingTask(task.id);
          }),
        ),
      Promise.resolve(),
    ),
  );
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

function getPendingTasks() {
  return openQueueDatabase().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(TASK_QUEUE_STORE, "readonly");
        const request = transaction.objectStore(TASK_QUEUE_STORE).getAll();
        request.onsuccess = () => {
          database.close();
          resolve(request.result);
        };
        request.onerror = () => {
          database.close();
          reject(request.error);
        };
      }),
  );
}

function removePendingTask(id) {
  return openQueueDatabase().then(
    (database) =>
      new Promise((resolve, reject) => {
        const transaction = database.transaction(TASK_QUEUE_STORE, "readwrite");
        transaction.objectStore(TASK_QUEUE_STORE).delete(id);
        transaction.oncomplete = () => {
          database.close();
          resolve();
        };
        transaction.onerror = () => {
          database.close();
          reject(transaction.error);
        };
      }),
  );
}
