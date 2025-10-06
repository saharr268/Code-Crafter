import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PracticePage from "./pages/PracticePage";
import SupportPage from "./pages/SupportPage";

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { index: true, path: "practice", element: <PracticePage /> },
      {index: true, path: "support", element: <SupportPage /> },
      { path: "*", element: <NotFound /> },
      // other routes
    ],
  },
];
