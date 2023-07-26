import React from "react";
import Takeout from "../assets/takeout.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Takeout})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          
        Welcome to our Chinese food restaurant, where we serve authentic and delicious Chinese cuisine made with the finest imported ingredients. Our chefs carefully select the best ingredients from China to ensure that our dishes are bursting with flavor and authenticity. Our menu features a wide variety of traditional and contemporary Chinese dishes, all prepared with care and attention to detail. Our restaurant has a warm and inviting atmosphere, and our friendly staff are always happy to help. Join us for a meal and discover the delicious flavors of China.
        
        </p>
      </div>
    </div>
  );
}

export default About;