import React, { useState } from "react";
import { IAuthInfo } from "../@types/auth";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Auth = () => {
  const [authMode, setAuthMode] = useState("signin");

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin");
  };

  const [signUpInfo, setSignUpInfo] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const onChange = (e: IAuthInfo , setInfo: IAuthInfo) => {
    const { name, value } = e.target;
    setInfo.setInfo((values: any) => ({ ...values, [name]: value }));
  };

  return authMode === "signin" ? (
    <LoginForm
      changeAuthMode={changeAuthMode}
      loginInfo={loginInfo}
      setLoginInfo={setLoginInfo}
      onChange={(e: IAuthInfo, setLoginInfo: IAuthInfo) => onChange(e, setLoginInfo)}
    />
  ) : (
    <SignupForm
      changeAuthMode={changeAuthMode}
      signUpInfo={signUpInfo}
      setSignUpInfo={setSignUpInfo}
      onChange={(e: IAuthInfo, setSignUpInfo: IAuthInfo) => onChange(e, setSignUpInfo)}
    />
  );
};

export default Auth;
