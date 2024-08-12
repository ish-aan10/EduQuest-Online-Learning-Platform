import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/book-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(prevState => !prevState);
  };
  
  return (
    <nav className="navbar">
        <div className="nav-logo">
            <img src={logo} alt="" />
            <div className="nav-title">EduQuest</div>
        </div>
        <div className="nav-menu">
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i><FontAwesomeIcon icon={faSearch} /></i>
          </div>
          <div className={`nav-link-items ${openMenu ? 'open' : ''}`}>
            <ul>
              <li className="nav-item">Home</li>
              <li className="nav-item">Contact</li>
              <li className="nav-item">About Us</li>
            </ul>
            <div className="nav-action">
              <div className="user-register">Register</div>
              <div className="user-signin">Sign In</div>
            </div>
          </div>
          <button className="menu-btn" onClick={toggleMenu}>
            <i><FontAwesomeIcon icon={faBars}/></i>
          </button>
        </div>
        
    </nav>
  );
}

export default Navbar;