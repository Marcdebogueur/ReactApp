import React from "react";
import Contact from "./compoments/Contact";
import Privacy from "./compoments/Privacy";
import Loginform from "./compoments/Loginform";
import Home from "./compoments/Home";
import Signup from "./compoments/Signup";
import "./App.css"

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./compoments/Navbar";


function App() {
  return <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/loginform"  element={<Loginform/>}/>
        <Route path="/signup"  element={<Signup/>}/>
        <Route path="/privacy"  element={<Privacy/>}/>
      </Routes>
    </Router>
  </div>
}

export default App;
