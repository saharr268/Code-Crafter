import { Outlet } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import ResourceDetails from "./pages/ResourceDetails";
import ResourcesPage from "./pages/ResourcesPage";
import MessagingApp from "./pages/MessagingApp";
import BrowserExtension from "./pages/BrowserExtension";
import AntiViruses from "./pages/AntiViruses";

import PracticePage from "./pages/quiz/PracticePage";
import SupportPage from "./pages/SupportPage";
import LearnPage from "./pages/learn/LearnPage";
import TopicPage from "./pages/learn/TopicPage";

export const routes = [
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },

      {
        path: "learn",
        children: [
          { index: true, element: <LearnPage /> },
          { path: "lesson/:id", element: <TopicPage /> },
        ],
      },
      {
        path: "practice",
        children: [
          { index: true, element: <PracticePage /> },
          { path: "1uiz/:id", element: <TopicPage /> },
        ],
      },

      { path: "support", element: <SupportPage /> },

      // Resources به‌عنوان مسیر جدا:
      { path: "resources", element: <ResourcesPage /> },
      // جزئیات منبع با پارامتر id:
      { path: "resources/:id", element: <ResourceDetails /> },
      { path: "messaging", element: <MessagingApp /> },
      { path: "extensions", element: <BrowserExtension /> },
      { path: "antivirus", element: <AntiViruses /> },
      // { path: "components/:id", element: <TopicDetail /> },
      { path: "support", element: <SupportPage /> },
      { path: "*", element: <NotFound /> },

      // other routes
    ],
  },
];
