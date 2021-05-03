import React from "react";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home'
import About from './Components/About/About';

import './App.css';
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
    <Contact></Contact>
    </div>



  );
}

export default App;

