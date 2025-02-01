import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouteComponents from "./route";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RouteComponents />
    </BrowserRouter>
  </StrictMode>
);
