import React from "react";
import MenuItem from "../components/MenuItem";
import "../styles/Favorites.css";
import "../styles/Navbar.css";

function Favorites({ favorites, handleFavorites }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Your Favorites</h1>
      <div className="menuList">
        {favorites.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              spiceLevel={menuItem.spiceLevel}
              ingred={menuItem.ingred}
              price={menuItem.price}
              handleFavorites={() => handleFavorites(menuItem)}
              isFavorite={true}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Favorites;
