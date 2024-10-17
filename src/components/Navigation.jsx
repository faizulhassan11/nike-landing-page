import React, { useState } from "react";
import logo from "../assets/brand_logo.png";
import "./Navigation.css";
import MenuIcon from "@mui/icons-material/Menu"; // Import MenuIcon from Material-UI

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      <ul className={isMenuOpen ? "active" : ""}>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Location</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className="login-btn">Login</button>
    </nav>
  );
};

export default Navigation;
