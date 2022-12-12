import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  return authMode === "signin" ? (
    <LoginForm changeAuthMode={changeAuthMode} />
  ) : (
    <SignupForm changeAuthMode={changeAuthMode} />
  );
};

export default Auth;
