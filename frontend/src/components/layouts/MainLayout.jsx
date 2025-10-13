import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { routes } from "../../routes";
import { MainContextProvider } from "../context/MainContext";
import { queryClient } from "../../../../backend/utils/reactQuery";

const MainLayout = () => {
  const content = useRoutes(routes);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>{content}</MainContextProvider>;
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
