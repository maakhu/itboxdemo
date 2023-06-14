import React, { useState, useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";


function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(true);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setShowMenu(true);
        setShowMenuButton(false);
      } else {
        setShowMenu(false);
        setShowMenuButton(true);
      }
    });
  }, []);

  return (
    <div className="Header">
      <div className="section">
        <Link to="/">
          <div className="logo">
            <h1>Imperia</h1>
          </div>
        </Link>
        {showMenuButton && (
          <div className="menuButton" onClick={() => setShowMenu(!showMenu)}>
            <i className="fas fa-bars"></i>
          </div>
        )}
        {showMenu && <Menu />}
      </div>
    </div>
  );
}