import { createContext } from "react";

// Theme and language and others
export const MainContextProvider = ({ children }) => {
  const value = {};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const MainContext = createContext({});
