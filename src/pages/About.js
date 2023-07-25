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
          
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut etiam sit amet nisl purus in. Eleifend donec pretium vulputate sapien nec sagittis. Sagittis id consectetur purus ut faucibus pulvinar. Nibh tortor id aliquet lectus proin nibh nisl condimentum. Enim nunc faucibus a pellentesque. Adipiscing bibendum est ultricies integer quis. Eros donec ac odio tempor orci dapibus. A condimentum vitae sapien pellentesque habitant morbi tristique. Aliquet porttitor lacus luctus accumsan tortor posuere. Netus et malesuada fames ac turpis egestas maecenas. Sagittis vitae et leo duis ut.
        
        </p>
      </div>
    </div>
  );
}

export default About;