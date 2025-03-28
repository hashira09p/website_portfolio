import NavigationRoot from "../navigationRoot/NavigationRoot";
import React from "react";
import "./Root.css";

const Root = () => {
  return (
    <div>
      <NavigationRoot />
      <section className="home">
        <div className="home-img">
          <img src="./../../me.jpg"></img>
        </div>
        <div className="home-content">
          <h1>Hi, It's <span>Jerome</span></h1>
          <h3 className="typing-text">I'm a <span></span></h3>
          <p>Passionate developer and hardware enthusiast, building web applications, IoT systems, and robotics projects. My expertise includes Ruby on Rails, Express.js, PostgreSQL, ESP32, and Arduino. I love pushing the boundaries of technology while staying grounded in faith. Outside of coding and electronics, I enjoy playing the piano, using music as a way to express creativity and unwind.</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/jeromeabelida09/"><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/hashira09p"><i className="fa-brands fa-github"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
          <a href="#" className="btn">Hire Me</a>
        </div>
      </section>
    </div>
  )
}

export default Root;