import React, { useContext, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LoginContextType } from "../@types/login";
import { LoginContext } from "../LoginContext";
import { getItem } from "../storage";

const Home = () => {
  const { isLoggedIn } = useContext(LoginContext) as LoginContextType;
  const location = useLocation();
  const sessionToken = useRef(location.state);
  const loginData = getItem(sessionToken.current, "session");
  const firstName = loginData.fullName.split(" ")[0];

  return isLoggedIn ? (
    <Navigate replace to="/auth" />
  ) : (
    <div>
      <h1>Welcome {firstName}</h1>
    </div>
  );
};

export default Home;
