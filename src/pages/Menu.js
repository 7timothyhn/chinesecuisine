import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu({ setFavorites, favorites }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              spiceLevel={menuItem.spiceLevel}
              ingred={menuItem.ingred}
              price={menuItem.price}
              handleFavorites={() => setFavorites((favorites) => {
                if (favorites.includes(menuItem)) {
                  return favorites.filter((item) => item !== menuItem);
                } else {
                  return [...favorites, menuItem];
                }
              })}
              isFavorite={favorites.includes(menuItem)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
