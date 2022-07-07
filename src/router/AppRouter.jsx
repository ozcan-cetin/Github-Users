import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "../pages/About"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Navbar from "../components/NavBar"

const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter