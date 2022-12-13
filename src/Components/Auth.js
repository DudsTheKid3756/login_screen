import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [signUpInfo, setSignUpInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const onChange = (e, setInfo) => {
    const { name, value } = e.target;
    setInfo((values) => ({ ...values, [name]: value }));
  };

  return authMode === "signin" ? (
    <LoginForm
      changeAuthMode={changeAuthMode}
      loginInfo={loginInfo}
      onChange={(e) => onChange(e, setLoginInfo)}
    />
  ) : (
    <SignupForm
      changeAuthMode={changeAuthMode}
      signUpInfo={signUpInfo}
      onChange={(e) => onChange(e, setSignUpInfo)}
    />
  );
};

export default Auth;
