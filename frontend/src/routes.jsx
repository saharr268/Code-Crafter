import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ResourceDetails from "./pages/ResourceDetails"

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFound /> },
      { path: "/resources/:id", element: <ResourceDetails /> },
      // other routes
    ],
  },
];
