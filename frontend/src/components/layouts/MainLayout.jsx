import { useRoutes } from "react-router-dom";

import { routes } from "../../routes";
import { MainContextProvider } from "../context/MainContext";
import { SnackbarProvider } from "notistack";
import { SpinnerLoading } from "../common/Loading";
import { useEffect, useState } from "react";
import ScrollToTop from "../common/ScrollToTop";

const MainLayout = () => {
  const content = useRoutes(routes);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. fetching data, images, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);

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
          <ScrollToTop />
          {isLoading ? <SpinnerLoading /> : content}
        </SnackbarProvider>
      </MainContextProvider>
    </div>
  );
};

export default MainLayout;
