import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, toggleAuth] = React.useState(true);

  const handleToggleAuth = () => {
    toggleAuth(!isAuth);
  }

  return <AuthContext.Provider value={{isAuth, handleToggleAuth}}>{children}</AuthContext.Provider>;
};
