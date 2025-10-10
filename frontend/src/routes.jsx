import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import ResourceDetails from "./pages/ResourceDetails"

import PracticePage from "./pages/PracticePage";
import SupportPage from "./pages/SupportPage";
import LearnPage from "./pages/LearnPage";


export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },

      { path: "*", element: <NotFound /> },
      { path: "/resources/:id", element: <ResourceDetails /> },


      { index: true, path: "practice", element: <PracticePage /> },
      { index: true, path: "support", element: <SupportPage /> },
      { index: true, path: "learn", element: <LearnPage /> },

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
      { path: "support", element: <SupportPage /> },{ path: "*", element: <NotFound /> },

      // other routes
    ],
  },
];
