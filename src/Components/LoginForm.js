import React from "react";
import { useNavigate } from "react-router-dom";
import { getItem } from "../storage";

const LoginForm = ({ changeAuthMode, loginInfo, setLoginInfo, onChange }) => {
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    const result = getItem(loginInfo.email, "session");
    if (result !== null) {
      if (
        result.email === loginInfo.email &&
        result.password === loginInfo.password
      )
        navigate("/", { state: loginInfo.email });
    } else console.error("stuff was wrong or something");

    setLoginInfo((values) => Object.values(values).fill(""));
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
