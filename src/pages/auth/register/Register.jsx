import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";
import Loginleft from "../../../component/loginLeft/Loginleft";
import { AiOutlineEye } from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

const Register = () => {
  const [eye,setEye]=useState(true);
  const [type,setType]=useState("password");
  const handleEyeClick=()=>{
    if(eye===false){
      setType("text");
      setEye(!eye);
    }
    else{
      setType("Password");
      setEye(!eye);
    }
  }
  const [registerData, setRegisteredData] = useState({
    name: "",
    regdno: "",
    email: "",
    password: "",
  });
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registerData.regdno.length !== 10) {
        toast.error("Registration Number must be 10 digits");
        return;
      }
      const rturl="https://web-backend-3bsv.onrender.com/create/user";
      const res = await axios.post(rturl, registerData);
      console.log(res);
         toast.success("User Register done SuccessFully");
    } catch (error) {
      if (error.response.status === 500 || error.response.status===400) {
        toast.error("Registration Successful");
      } else {
        console.log(error);
      }
    }
  };
  const handleRegisterChange = (e) => {
    setRegisteredData({ ...registerData, [e.target.name]: e.target.value });
  };
  return (
    <div className="auth-container">
      <Loginleft className="left-container"/>
      <div className="auth-box-container">
      <div className="auth-box">
        <h1 className="auth-heading">Experience the Future Tech</h1>
        <p className="auth-head-bottom">Register for Zairzest 3.0</p>
        <form className="auth-box-form" onSubmit={handleRegisterSubmit}>
          <div>
            <input
              className="auth-input"
              type="text"
              required
              name="name"
              value={registerData.name}
              onChange={handleRegisterChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="auth-input"
              type="number"
              required
              name="regdno"
              value={registerData.regdno}
              onChange={handleRegisterChange}
              placeholder="Registration Number"
            />
          </div>
          <div>
            <input
              className="auth-input"
              type="email"
              required
              name="email"
              value={registerData.email}
              onChange={handleRegisterChange}
              placeholder="Email here"
            />
          </div>
          <div className="input-div">
            <input
              className="auth-input"
              type={`${type}`}
              required
              name="password"
              value={registerData.password}
              onChange={handleRegisterChange}
              placeholder="Password"
            />
            <span  className="eye-icon">{
              eye==true ? 
              <AiOutlineEyeInvisible onClick={()=>{handleEyeClick()}}/>
               
              :
              <AiOutlineEye onClick={()=>{handleEyeClick()}}/>
            }
            </span>
          </div>

          <button type="submit" className="auth-sbutton"> Register</button>
        </form>
        <div className="auth-bottom-text">
          Already registered ? <Link to="/login">Login</Link>
        </div>
      </div>
      <ToastContainer theme="colored" />
      </div>
    </div>
  );
};

export default Register;
