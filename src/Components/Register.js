import React, { useState } from "react";
import "../Css/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupCompo() {
  // useEffect(()=>{
  //   const token = localStorage.getItem("token");
  // })

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navi = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3500/api/register", data)
      .then((res) => {
        console.log(res);
        alert(res.data.msg);
        setData(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.email);
        console.log(res.data.token);
        navi("/login");
      })
      .catch((err) => console.log("axios error from register page", err));

    setData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    console.log(data);
  };

  const navigate = useNavigate();
  return (
    <div className="body">
      <div className="main">
        <div className="signup">
          <form onSubmit={handleSubmit} method="post">
            <label className="label" for="chk" aria-hidden="true">
              Sign up
            </label>
            <div className="under_div_form">
              <input
                className="input"
                type="text"
                name="name"
                value={data.name}
                autoComplete="off"
                placeholder="user name"
                required
                onChange={handleChange}
              />
              <input
                className="input"
                type="email"
                name="email"
                value={data.email}
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <input
                className="input"
                type="Password"
                name="Password"
                // value={data.password}
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <input
                className="input"
                type="Password"
                name="confirmpassword"
                // value={data.confirmPassword}
                placeholder="Confirm Password"
                required
                onChange={handleChange}
              />
              <button type="submit" className="buttton_login">
                Sign up
              </button>
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
