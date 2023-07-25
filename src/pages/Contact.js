import React from "react";
import Takeout2 from "../assets/takeout2.jpg";
import "../styles/Contact.css";

import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Takeout2})` }}
      ></div>

      <div className="rightSide">
        <h1> Order Now</h1>
        <h5>Opening Hours: 7 am to 7 pm <br></br>
        <br></br>
        +1 (111)-123-1234 
        <br></br><br></br>
        When you call, you will need to give us your name and a number to call if we have a problem with your order.
        </h5>

        <form id="contact-form" method="POST">
          <label htmlFor="info"> Our store only accepts phone calls at the momment. New Features will not be available until 2024.
         
          </label>
           <Link to="/menu">
          <button> Back to menu </button>
        </Link>
          
        </form>
      </div>
    </div>
  );
}

export default Contact;