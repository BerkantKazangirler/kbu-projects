import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnaSayfa } from "./components/anasayfa";
import { Hakkimizda } from "./components/hakkimizda";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AnaSayfa />} />
        <Route path="step-2" element={<Hakkimizda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
