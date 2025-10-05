import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import PracticePage from "./pages/PracticePage";

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      {index: true, path: "practice", element: <PracticePage />},
      { path: "*", element: <NotFound /> },
      // other routes
    ],
  },
];
