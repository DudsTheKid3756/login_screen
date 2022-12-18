import React, { createContext, useState } from "react";
import { storeItem } from "./storage";
import { IIsLoggedIn, LoginContextType } from "./@types/login";

export const LoginContext = createContext<LoginContextType | null>(null);

const LoginContextProvider = (props: {
  children:
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<IIsLoggedIn>({ is: false });
  storeItem("loggedIn", false, "local");

  const handleLogIn = (bool: IIsLoggedIn) => {
    setIsLoggedIn(bool);
    storeItem("loggedIn", bool, "local");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, handleLogIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
