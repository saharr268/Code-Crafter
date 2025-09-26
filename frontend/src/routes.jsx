import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
      // other routes
    ],
  },
];
