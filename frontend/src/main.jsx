import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout.jsx";

import "./assets/styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  </StrictMode>
);
