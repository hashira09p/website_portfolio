import React from "react";
import { Link } from "react-router-dom";
import "./NavigationRoot.css"

const NavigationRoot = () => {
  return (
    <header className="navigation">
      <a href="#" className="logo">Jerome</a>
      <span>Log in for More <span>&#8594;</span></span>
      <nav>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  )
}

export default NavigationRoot;