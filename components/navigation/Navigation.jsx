import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return (
    <header className="navigation">
      <a href="#" className="logo">Jerome</a>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/education">Education</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Navigation;