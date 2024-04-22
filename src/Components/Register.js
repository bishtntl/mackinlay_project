import React from "react";
import "../Css/login.css";
import { useNavigate } from "react-router-dom";

function SignupCompo() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>
            <div className="under_div_form">
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="user name"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="Password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button className="buttton_login">Sign up</button>
              <span className="already_acc">
                have an already account ?{" "}
                <span
                  onClick={() => navigate("/login")}
                  style={{ color: "blue" }}
                >
                  Login
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupCompo;
