import React from 'react';
import  "./Navbar.css"

const Navbar = () => {
    return (
        <div  class="sticky-top">
            <nav class="navbar navbar-expand-lg   menu">
                <div class="container-fluid container">

           <a href="#home"> <h1 class="navbar-brand " >Amina Anika</h1></a>


    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">

                <li>
          <a class="nav-link" href="#home">home</a>

            </li>
                <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"   href="#blogs"  >Blogs</a>
                </li>
                <li class="nav-item">
          <a class="nav-link"   href="https://drive.google.com/file/d/12Lp0igk-6sDDJjy64aZBoaHD0ObXpWii/view?usp=sharing"  >Resume</a>
                </li>
                <li class="nav-item">
          <a class="nav-link"   href="#contact"  >Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Navbar;