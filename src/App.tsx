import { Routes, Route } from "react-router-dom";

import AddFrom from "./components/fast-card/addForm";
import FastCard from "./pages/fast-card-pages/fastCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/fastcard/:productId" element={<FastCard />} />
      </Routes>
    </>
  );
}

export default App;
