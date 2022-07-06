import { Routes, Route } from "react-router-dom";

import AddFrom from "./components/fast-card/addForm";
import FastCard from "./pages/fast-card-pages/fastCard";
import FastCardInvoice from "./pages/fast-card-pages/fastCardInvoice";

function App() {
  return (
    <>
      <Routes>
        <Route path="/fastcard/:productId" element={<FastCard />} />
        <Route path="/fastcard/invoice" element={<FastCardInvoice />} />
      </Routes>
    </>
  );
}

export default App;
