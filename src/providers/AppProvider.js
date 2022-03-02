import React from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
