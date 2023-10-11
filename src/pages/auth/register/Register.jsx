import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";
import Loginleft from "../../../component/loginLeft/Loginleft";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import scan from "../../../assets/images/scan.jpg";

const Register = () => {
  const [eye, setEye] = useState(true);
  const [type, setType] = useState("password");
  const [registerData, setRegisteredData] = useState({
    name: "",
    regdno: "",
    email: "",
    password: "",
    file: null,
  });

  const handleEyeClick = () => {
    if (eye === false) {
      setType("text");
      setEye(!eye);
    } else {
      setType("Password");
      setEye(!eye);
    }
  };

  const handleRegisterChange = (e) => {
    if (e.target.name === "file") {
      setRegisteredData({
        ...registerData,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setRegisteredData({ ...registerData, [e.target.name]: e.target.value });
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    try {
      if (registerData.regdno.length !== 10) {
        toast.error("Registration Number must be 10 digits");
        return;
      }

      const formdata = new FormData();
      formdata.append("name", registerData.name);
      formdata.append("regdno", registerData.regdno);
      formdata.append("email", registerData.email);
      formdata.append("password", registerData.password);
      formdata.append("file", registerData.file);

      const rturl = "http://localhost:5000/create/user";
      const res = await axios.post(rturl, formdata, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formdata._boundary}`,
        },
      });
      console.log(res);
      toast.success("Registration Successful");
    } catch (error) {
      if (error.response.status === 500 || error.response.status === 400) {
        toast.error("Registration Failed");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="auth-container">
      <Loginleft className="left-container" />
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
              <span className="eye-icon">
                {eye == true ? (
                  <AiOutlineEyeInvisible
                    onClick={() => {
                      handleEyeClick();
                    }}
                  />
                ) : (
                  <AiOutlineEye
                    onClick={() => {
                      handleEyeClick();
                    }}
                  />
                )}
              </span>
            </div>
            <div className="payment-part">
              <img className="payment-image" src={scan} alt="" />
              <div className="payment-upload">
                <input
                  // className="payment-upload"
                  type="file"
                  required
                  onChange={handleRegisterChange}
                  name="file"
                />
                <h3 className="upload-text">(Upload the screenshot of the payment for the events with Zen 3.0!)</h3>
              </div>
            </div>
            <button type="submit" className="auth-sbutton">
              {" "}
              Register
            </button>
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
