import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Ccloth2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Chinese Cuisine</h1>
        <p> MADE WITH AUTHENTIC CHINESE INGREDIENTS</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;