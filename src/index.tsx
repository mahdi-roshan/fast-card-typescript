import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const element = document.getElementById("root");
const root = createRoot(element!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
