import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "../components/home/Home";
import Root from "../components/root/Root";
import Form from "../components/forms/loginForm"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Form />} />
          <Route path='/register' element={<Root />} />
          <Route path='/' element={<Root />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
