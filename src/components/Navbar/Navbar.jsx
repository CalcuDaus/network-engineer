import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />

      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo">
            <img src="./assets/images/logo_kelas_png.png" alt="" />
            <h1>XII TJKT 3</h1>
          </div>
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-item">
                About
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Gallery
              </a>
            </li>
            <li>
            <a href="" className="menu-item">
                Contact Us
              </a>
            </li>

            <button className="contact-btn" onClick={() => {}}>
              Kepoin Kami
            </button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

    </>
   
  );
};

export default Navbar;
