import React, { useState } from "react";
import "../Css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const token = localStorage.getItem("token");
function LoginCompo() {
  const navigate=useNavigate()
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/api/login", value, {
        headers: { authorization: `Bearer${token}` },
      })
      .then((res) => {
        alert(res.data.msg);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.token);
        console.log(token)
        navigate("/")
      });
  };
 
  return (
    <div className="body">
      <div className="main">
        <div className="signup">
          <form onSubmit={handleSubmit}>
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
                onChange={handleChange}
              />
              <input
                className="input"
                type="Password"
                name="pswd"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <button className="buttton_login">login</button>
              <span className="already_acc_reg">
              Don't have an account?{" "}
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
