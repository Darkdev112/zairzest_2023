import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";
import Right from "../../assets/images/top-img.png";
import zen from "../../assets/images/zen.png";
import workshops from "../../assets/images/workshops.png";
import techEvents from "../../assets/images/tech-events.png";
import funEvents from "../../assets/images/fun-events.png";

const Main = () => {
  let authToken = sessionStorage.getItem("Auth Token");

  return (
    <div className="main-page">
      <div className="top-part">
        <div className="left-part">
          <div className="content-left">
            <h1 className="left-head">Experience the Future</h1>
            <h1 className="left-head " style={{ marginTop: "-28px" }}>
              Tech with zairza
            </h1>
            <p className="para-left">
              Release all your stress with the exciting Tech and Fun events in
            </p>
            <p className="para-left">
              the most awaited fest . Zairzest 2.0 presented by Zairza.
            </p>
            <button className="btn-rn">Register Now</button>
          </div>
        </div>
        <div className="right-part">
          <img className="right-img" src={Right} alt="" height={550} />
        </div>
      </div>

      {/* <h1>Welcome</h1> */}

      {/* {authToken ? (<Link to="/profile">Profile</Link>): (<Link to="/login"><button>Login</button></Link>)} */}

      <div className="mid-part">
        <div className="left-mid-part">
          <img className="zen-image" src={zen} alt="" height={500} />
        </div>
        <div className="right-mid-part">
          <h1>Zen will guide you</h1>
          <h3 style={{ color: "rgba(232, 46, 138, 1)", fontWeight: "600" }}>
            Zest. For. Tech.
          </h3>
          <p>
            ‘The best way to live the future is to create it.’ Moving on from
            the safari around the tech forest, we now bring you the city of
            tech. Experience the new future with us. We shall lead you to
            explore through the suburb of the cybercity, to drive into various
            tech stacks, dev branches, recursion, trees and languages like
            firefox and python. The Best is yet to come. Stay tuned for
            something awesome!.
          </p>
        </div>
      </div>

      <div className="bottom-part">
        <div>
          <h1 className="event-head">Events for you</h1>
          <p>
            Everything has been made simple for you to scroll around and get the
            most{" "}
          </p>
          <p style={{ marginTop: "-17px" }}>out of the options available.</p>
          <div className="images-bottom">
            <img className="bottom-img1" style={{margin: "30px 0"}} src={techEvents} alt="" height={200} />
            <img className="bottom-img2" style={{margin: "30px 50px"}} src={funEvents} alt="" height={200} />
            <img className="bottom-img1" style={{margin: "30px 0"}} src={workshops} alt="" height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
