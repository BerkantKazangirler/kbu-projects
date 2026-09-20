import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Anasayfa } from "./components/anasayfa";
import { Hakkimizda } from "./components/hakkimizda";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Anasayfa />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
