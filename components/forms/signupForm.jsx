import { React, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./formStyle.css";
import axios from "axios";



const SignUpForm = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: ""
  })

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevValue => {
      return ({
        ...prevValue,
        [name]: value
      })
    })
  }

  async function handleClick(event) {
    event.preventDefault();
    console.log("Hello")

    try {
      navigate('/sign_in');
      await axios({
        method: 'post',
        url: 'http://localhost:3000/sign_up',
        data: {
          username: form.username,
          password: form.password
        }
      });
    }
    catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="form-container">
      <div className="box">
        <form onSubmit={handleClick}>
          <h2>Register</h2>
          <div className="inputBox">
            <input type="text" name="username" onChange={handleChange} value={form.username} autoComplete="off" required />
            <span>Username</span>
            <i></i>
          </div>

          <div className="inputBox">
            <input type="password" name="password" onChange={handleChange} value={form.password} required />
            <span>Password</span>
            <i></i>
          </div>

          <div className="links">
            <Link to="/sign_in">Already have an account? Sign in →</Link>
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          <input type="submit" value="SignUp" />
        </form>
      </div>
    </div>
  )
}

export default SignUpForm;