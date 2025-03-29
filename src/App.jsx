import { React, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "../components/home/Home";
import Root from "../components/root/Root";
import SignInForm from "../components/forms/signinForm"
import SignUpForm from "../components/forms/signupForm"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/sign_in' element={<SignInForm />} />
          <Route path='/sign_up' element={<SignUpForm />} />
          <Route path='/' element={<Root />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
