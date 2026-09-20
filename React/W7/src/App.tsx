import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    document.getElementById("heading").textContent = `Sayaç ${count} oldu.`;
  }, [count]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <>
      <section id="center">
        <div id="heading"></div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      {data && (
        <div>
          {data.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2>{data.title}</h2>
              <p>ID: {data.id}</p>
              <p>User ID: {data.userId}</p>
              <p>Completed: {data.completed ? "Yes" : "No"}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
