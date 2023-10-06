import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";


const Login = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginSubmit = async (e) => {

    try {
      e.preventDefault();
      const res = await axios.post(
        "https://web-backend-3bsv.onrender.com/login/user",
        loginData
      );
      const token = res.data.token;
      console.log(token);
      toast.success("User Login done SuccessFully");
    } catch (error) {
      const err=error.response;
      if(err.data.msg==="Mail Id is not Registered"){
        toast.error("Mail Id is not Registered");
      }
      if(err.data.message==="Wrong Password"){
        toast.error("Wrong Password");
      }
      else{
        toast.error(error.response);
      }
    }
  };

  const handleLoginChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="auth-box">
        <h1>Enter details to get your code</h1>
        <p>This code is unique for every use</p>
        <form className="auth-box-form" onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="email"
              required
              name="email"
              value={loginData.email}
              onChange={handleLoginChange}
              placeholder="Email here"
            />
          </div>
          <div>
            <input
              type="password"
              required
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
          </div>

          <button>Login</button>
        </form>
        <div>
          Not registered ! <Link to="/register">Register</Link>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Login;
