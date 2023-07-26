import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ image, name, price, spiceLevel, ingred, handleFavorites, isFavorite }) {
  return (
    
      <div className="menuItem">
        <Link to="/contact">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>{spiceLevel}</p>
        <p>{ingred}</p>
        <p>${price}</p>
        </Link>
        <button onClick={handleFavorites}> {isFavorite ? "Remove from Favorites" : "Add to Favorites"}</button>
      </div>
    
  );
}

export default MenuItem;