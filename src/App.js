import "./App.css";
import Navbar from "./components/Navbar.js";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Footer from "./components/Footer.js";
import Favorites from "./pages/Favorites.js";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;

function App() {
  return (
    <div className="App"> 
      <Router>
        <Navbar />
        <Routes> 
          <Route path="/chinesecuisine" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favorite" element={<Favorites />} />
        </Routes> 
        <Footer/>
      </Router> 
    </div>
  );
}

export default App;
