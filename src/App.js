import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footer.js";
import Favorites from "./pages/Favorites.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorites = (menuItem) => {
    setFavorites((favorites) => {
      if (favorites.includes(menuItem)) {
        return favorites.filter((item) => item !== menuItem);
      } else {
        return [...favorites, menuItem];
      }
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/chinesecuisine" element={<Home />} />
          <Route path="/menu" element={<Menu setFavorites={setFavorites} favorites={favorites} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorites" element={<Favorites favorites={favorites} handleFavorites={handleFavorites} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
