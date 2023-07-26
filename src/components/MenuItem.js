import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price, spiceLevel, ingred }) {
  return (
  <Link to="/contact"> 
    <div className="menuItem">
      
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {spiceLevel} </p>
      <p> {ingred}</p>
      <p> ${price} </p>
      
       
    </div>
    </Link>
  );
}

export default MenuItem;