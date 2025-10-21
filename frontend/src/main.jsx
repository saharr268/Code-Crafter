import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import MainLayout from "./components/layouts/MainLayout.jsx";

import "./assets/styles/global.css";
import "./assets/styles/reset.css";
import "./assets/styles/styleSheet.css";
import { queryClient } from "./helpers/utils/reactQuery.js";
import { QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainLayout />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
