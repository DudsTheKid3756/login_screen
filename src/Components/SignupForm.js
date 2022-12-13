import React from "react";
import { useNavigate } from "react-router-dom";
import { storeItem } from "../storage";

const SignupForm = ({ changeAuthMode, signUpInfo, setSignUpInfo, onChange }) => {
  const navigate = useNavigate();

  const onSignUp = (e) => {
    e.preventDefault();
    storeItem(signUpInfo.email, signUpInfo, "session");
    navigate("/", { state: signUpInfo.email });
    setSignUpInfo((values) => Object.values(values).fill(""));
  };

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary Link-auth-mode" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={signUpInfo.fullName}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={signUpInfo.email}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={signUpInfo.password}
              onChange={onChange}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onSignUp}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
