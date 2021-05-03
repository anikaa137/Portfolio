import React from 'react';
import  "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg   menu">
                <div class="container-fluid container">

              <h1 class="navbar-brand " to="/">Amina Anika</h1>


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
          <a class="nav-link"   href="https://drive.google.com/file/d/1S0Pefi_6ZPLTGxxJLaC1X_GUI3F84UjN/view?usp=sharing"  >Resume</a>
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