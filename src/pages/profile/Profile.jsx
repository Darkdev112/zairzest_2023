import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import './Profile.scss'

const Profile = () => {
  const history = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    history("/login");
  };
  return (
    <div>
      <Navbar/>
      <div className="profile_container">
        <div className="profile_head">
          <div className="profile_details">
            <h2>Dev Ashrit Behera</h2>
            <p className="profile_para">Regd no : 2111100410</p>
          </div>
          <div className="profile_zencode">
            <div className="zencode_details">
              Zen code : 2121321
            </div>
          </div>
        </div>
        <div>

        </div>
        <div>

        </div>
      </div>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <Footer/>
    </div>
  );
};

export default Profile;
