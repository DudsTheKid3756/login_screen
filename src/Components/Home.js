import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { getItem } from "../storage";

const Home = () => {
  const location = useLocation();
  const tokenKey = useRef(location.state);
  const loginData = getItem(tokenKey.current, "session");
  const firstName = loginData.fullName.split(" ")[0];

  return (
    <div>
      <h1>Welcome { firstName }</h1>
    </div>
  );
};

export default Home;
