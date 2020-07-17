import React from "react";
import logo from "../../../images/logo.png";
import Burger from "./Burger";
import "./Navbar.css"

const Navbar = () => {
  return (
	 
	
    <nav className="nav container-fluid">
      <div className="logo">
          <a href="/"><img src={logo} className="img-responsive" alt=""/></a>
      </div>
      <Burger/>
	 
    </nav>
  );
};

export default Navbar;
