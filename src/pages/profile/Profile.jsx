import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const history = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("Auth Token");
    history("/login");
  };
  return (
    <div>
      <h1>Name</h1>
      <h1>Email</h1>
      <h1>Registartion Number</h1>
      <h1>ZenCode</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
