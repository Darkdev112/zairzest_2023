import React from 'react'
import {Link} from 'react-router-dom'
import Footer from "../../component/Footer/Footer";

const Main = () => {
  let authToken = sessionStorage.getItem("Auth Token");
 
  return (
    <div>
      <h1>Welcome</h1>

      {authToken ? (<Link to="/profile">Profile</Link>): (<Link to="/login"><button>Login</button></Link>)}

      <Footer />
    </div>
  )
}

export default Main