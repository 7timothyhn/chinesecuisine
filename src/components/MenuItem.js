import React from "react";

function MenuItem({ image, name, price, spiceLevel }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {spiceLevel} </p>
      
      <p> ${price} </p>
    </div>
  );
}

export default MenuItem;