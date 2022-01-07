import React, { useState } from "react";
import {  RiCloseFill } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";
import { Link } from "react-router-dom";
function Header() {
  const [showHeader, setShowHeader] = useState(false);
  const path = window.location.pathname;
  return (
    <div className="header">
      {showHeader ? (
        <RiCloseFill
          onClick={() => {
            setShowHeader(!showHeader);
          }}
          className="menu-icon position-fixed top-0 end-0"
        />
      ) : (
        <CgMenuGridO
          className="menu-icon position-fixed top-0 end-0"
          onClick={() => {
            setShowHeader(!showHeader);
          }}
        />
      )}

      <ul className={`${showHeader ? "show-header" : "hide-header"} n-box1`}>
        <li className={`${path === "/" && "active"}`}>
          <Link to="/">Home</Link>
        </li>
        <li className={`${path === "/projects" && "active"}`}>
          <Link to="projects">Projects</Link>
        </li>
        <li className={`${path === "/courses" && "active"}`}>
          <Link to="/courses">Learnings</Link>
        </li>
        <li className={`${path === "/contact" && "active"}`}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
