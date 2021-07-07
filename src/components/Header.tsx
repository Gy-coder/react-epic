import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../logo.svg";

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/histroy">Histroy</NavLink>
      </nav>
    </header>
  );
};

export default Header;
