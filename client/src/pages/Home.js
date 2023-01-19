import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <>
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> WasteNot </h1>
        <p> Share with others, don't waste food.</p>
        <Link to="/login"><button style={{marginRight:"20px"}}> LOGIN </button></Link>
        <Link to="/signup"><button> SIGNUP </button></Link>
      </div>
    </div>
    </>
  );
}

export default Home;
