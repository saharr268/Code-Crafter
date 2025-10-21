import { useRoutes } from "react-router-dom";

import { routes } from "../../routes";
import { MainContextProvider } from "../context/MainContext";
import { SnackbarProvider } from "notistack";
import { useLessonData } from "../../services/hooks/lessons";
import { SpinnerLoading } from "../common/Loading";

const MainLayout = () => {
  const content = useRoutes(routes);

  const { isPending } = useLessonData();
  return (
    <div>
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
          {isPending ? <SpinnerLoading /> : content}
        </SnackbarProvider>
      </MainContextProvider>
    </div>
  );
};

export default MainLayout;
