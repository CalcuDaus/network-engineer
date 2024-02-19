import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="logo mobile">
            <img src="./assets/images/logo_kelas_png.png" alt="" />
            <h1>XII TJKT 3</h1>
          </div>
          <ul>
            <li>
              <a href="" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
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
        </div>
      </div>
    </>
  );
};

export default MobileNav;
