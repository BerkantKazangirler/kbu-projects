import { useState } from "react";
import "./App.css";
import { Dugme } from "./Dugme";

function App() {
  const [yazi, setYazi] = useState("");

  const [count, setCount] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{yazi}</h1>
      <h3>Count: {count}</h3>
      <Dugme arttir={arttir} />
      <input
        type="text"
        value={yazi}
        onChange={(e) => setYazi(e.target.value)}
      />
    </>
  );
}

export default App;
