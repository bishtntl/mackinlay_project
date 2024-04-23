import React from "react";
import "../Css/login.css";
import { useNavigate } from "react-router-dom";

function LoginCompo() {
  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="main">
        <div className="signup">
          <form>
            <label className="label" for="chk" aria-hidden="true">
              User Login
            </label>
            <div className="under_div_form">
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
              <button className="buttton_login">login</button>
              <span className="already_acc_reg">
                if you haven't register{" "}
                <span
                  onClick={() => navigate("/signup")}
                  style={{ color: "blue" }}
                >
                  Sign up
                </span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginCompo;
