import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ResourceDetails from "./pages/ResourceDetails"; 
import ResourcesPage from "./pages/ResourcesPage";   

import PracticePage from "./pages/PracticePage";
import SupportPage from "./pages/SupportPage";
import LearnPage from "./pages/LearnPage";

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },

      { index: true, path: "practice", element: <PracticePage /> },
      { index: true, path: "support", element: <SupportPage /> },
      { index: true, path: "learn", element: <LearnPage /> },
      { path: "practice", element: <PracticePage /> },

      // Resources به‌عنوان مسیر جدا:
      { path: "resources", element: <ResourcesPage /> },
      // جزئیات منبع با پارامتر id:
      { path: "resources/:id", element: <ResourceDetails /> },

      { path: "support", element: <SupportPage /> },
      { path: "*", element: <NotFound /> },

      // {
      //   path: "practice",
      //   children: [
      //     { index: true, element: <PracticePage /> },
      //     { path: "/:id", element: <PracticePage /> },
      //   ],
      // },
      // {
      //   path: "lessons",
      //   children: [
      //     { index: true, element: <LessonPage /> },
      // { path: "/:id", element: <PracticePage /> },
      //   ],
      // },

      // other routes
    ],
  },
];
