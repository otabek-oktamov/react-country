import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
  return (
    <>
      <div className="siteHeader boxShadow">
        <div className="container siteHeaderContainer">
          <Link className="logo" to="/">
            <h2>Where in the world ? </h2>
          </Link>
          <button className="siteMode">
           
            <i className="fas fa-moon"></i> Dark Mode
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
