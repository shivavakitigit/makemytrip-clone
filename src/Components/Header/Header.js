// src/components/layout/Header/Header.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { dataShare } from "../../App";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">MakeMyTrip Clone</Link>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <Link to="/flights">Flights</Link>
          </li>
          <li>
            <Link to="/home">Hotels</Link>
          </li>
          <li>
            <Link to="/trains">Trains</Link>
          </li>
          <li>
            <Link to="/buses">Buses</Link>
          </li>
        </ul>
      </nav>
      <div className="header-auth">
        <button className="login-btn">Login</button>
      </div>
    </header>
  );
};

export default Header;
