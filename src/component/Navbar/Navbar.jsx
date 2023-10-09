import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import "./Navbar.scss"
// import Logo from "";

const Navbar = ({userDetails}) => {
  const [showNav, setShowNav]=useState(true);
  const [animate,setAnimate]=useState(0);
  const navigate = useNavigate()

  const close=()=>{
    setAnimate(1);
    setTimeout(()=>setShowNav(true),300);
  }

  return (<>
    {
      showNav===true ? (
        <div className="main_navbar" >
          <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left" >
        {/* <Link to={userDetails ? '/home' : '/'} onClick={close}><img src={Logo} alt="" className="logo" style={{width:"60px", marginRight: '13px'}}/></Link> */}
      {/* <h1 style={{color: 'red', fontSize: '23px', letterSpacing:'1.5px'}}>FIT SIMULATE</h1> */}
      </div>
      <div className="navbar__right">
        <Link to={userDetails ? '/home' : '/'}><h4 className="navbar__text">About Us</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Register</h4></Link>
        <Link to='/login'><h4 className="navbar__text">Sign In</h4></Link>
        <AiOutlineMenu className="navbar__menu" onClick={()=>{setShowNav(false);setAnimate(0)}}/>
      </div>
    </div>
    </div>
    </div>
      ):(
    <div className="main_navbar">
      <div className="sub_nav">
      <div className="navbar">
      <div className="navbar__left">
      {/* <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link> */}
      </div>
    </div>
    <div className={animate===0?"navbar_content":"navbar_content_close"}>
      <div className="close_icon"><RxCross1 className="navbar__menu" onClick={close}/></div>
      <div className="nav-content-container">
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">About Us</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Register</div></Link>
      <Link to="/" className="aboutUs-link" onClick={close}><div className="nav-button-content">Sign In</div></Link>
      </div>
    </div>
      </div>
    </div>
      )
    }
    </>
  );
};

export default Navbar;