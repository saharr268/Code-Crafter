import { useRoutes } from "react-router-dom";

import { routes } from "../../routes";
import { MainContextProvider } from "../context/MainContext";

const MainLayout = () => {
  const content = useRoutes(routes);
  return (
    <div>
      <MainContextProvider>{content}</MainContextProvider>;
    </div>
  );
};

export default MainLayout;
