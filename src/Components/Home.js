import React, { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getItem } from "../storage";

const Home = () => {
  const location = useLocation();
  const sessionToken = useRef(location.state);
  const loginData = getItem(sessionToken.current, "session");
  const firstName = loginData.fullName.split(" ")[0];

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    const localToken = getItem("loggedIn", "local");
    if (localToken) {
      setIsLoggedIn(localToken);
    }
  }, []);

  return isLoggedIn ? (
    <Navigate replace to="/auth" />
  ) : (
    <div>
      <h1>Welcome {firstName}</h1>
    </div>
  );
};

export default Home;
