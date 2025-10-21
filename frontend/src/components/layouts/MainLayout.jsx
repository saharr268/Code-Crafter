import { useRoutes } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { routes } from "../../routes";
import { MainContextProvider } from "../context/MainContext";
import { queryClient } from "../../helpers/utils/reactQuery";
import { SnackbarProvider } from "notistack";

const MainLayout = () => {
  const content = useRoutes(routes);
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <MainContextProvider>
          <SnackbarProvider
            style={{
              direction: "rtl",
              backgroundColor: "#fff",
              color: "#333333",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "normal",
              borderRadius: "0",
              boxShadow: "0px 8px 16px 0px rgba(145, 158, 171, 0.16)",
            }}
          >
            {content}
          </SnackbarProvider>
        </MainContextProvider>
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
