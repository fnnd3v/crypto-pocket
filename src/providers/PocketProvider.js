import React from "react";

export const PocketContext = React.createContext();

const PocketProvider = ({ children }) => {
  const init = () => {
    console.log("init");
  };

  return <PocketContext.Provider value={{ init }}>{children}</PocketContext.Provider>;
};

export default PocketProvider;
