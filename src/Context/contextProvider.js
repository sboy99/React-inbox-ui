import React, { useContext, useState, createContext } from "react";
const GlobalContext = createContext();
export const ContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
