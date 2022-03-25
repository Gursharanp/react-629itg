import React from 'react';
import './style.css';
import Home from './Home';
import Login from './Login'
import Header from './Header'
import Signin from './SignIn'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/Login" element={<Login />}/>
      </Routes>
    </Router>
  );
}
