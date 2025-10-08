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
      // { path: "practice", element: <PracticePage /> },
      {
        path: "practice",
        children: [
          { index: true, element: <PracticePage /> },
          // { path: "/:id", element: <PracticePage /> },
        ],
      },
      // {
      //   path: "lessons",
      //   children: [
      //     { index: true, element: <LessonPage /> },
      // { path: "/:id", element: <PracticePage /> },
      //   ],
      // },
      { path: "support", element: <SupportPage /> },
      { path: "*", element: <NotFound /> },
      // other routes
    ],
  },
];
