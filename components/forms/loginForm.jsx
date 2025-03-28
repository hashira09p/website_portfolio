import React from "react";
import { Link } from "react-router-dom";
import "./loginForm.css"

const Form = () => {
  return (
    <div className="form-container">
      <div className="box">
        <form>
          <h2>Sign In</h2>
          <div className="inputBox">
            <input type="text" required />
            <span>Username</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" required />
            <span>Password</span>
            <i></i>
          </div>

          <div className="links">
            <Link to="/signup">Sign Up</Link>
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Form;