import React, { useContext } from "react";
import { IIsLoggedIn, LoginContextType } from "../@types/login";
import { LoginContext } from "../LoginContext";
import { getItem } from "../storage";

const LoginForm = ({ changeAuthMode, loginInfo, setLoginInfo, onChange }) => {
  const { handleLogIn } = useContext(LoginContext) as LoginContextType;
  const tokenKey = getItem(loginInfo.email, "session");

  const onLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (
      tokenKey === null ||
      tokenKey.email !== loginInfo.email ||
      tokenKey.password !== loginInfo.password
    )
      console.error("stuff was wrong or something");
    else handleLogIn(true as unknown as IIsLoggedIn);

    setLoginInfo((values: { [s: string]: unknown } | ArrayLike<unknown>) =>
      Object.values(values).fill("")
    );
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Not registered yet?{" "}
            <span
              className="link-primary Link-auth-mode"
              onClick={changeAuthMode}
            >
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={loginInfo.email}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              defaultValue={loginInfo.password}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={onLogin}>
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
