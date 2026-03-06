import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const arttir = () => {
    setCount(count + 1);
  };

  const azalt = () => {
    setCount2(count2 - 1);
  };

  return (
    <>
      <button onClick={arttir}>Count is {count}</button>
      <button onClick={azalt}>Count2 is {count2}</button>
    </>
  );
}

export default App;
