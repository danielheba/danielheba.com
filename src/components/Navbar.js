import React from "react";
import "./Navbar.css"

import Logo from './Logo';


const Navbar = () => (
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-1 fixed-top">
        <div class="container">
            <Logo />
          <button class="navbar-toggler border-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link active" href="#home">Home</a>
              <a class="nav-link" href="#computers">Komputery i akcesoria</a>
              <a class="nav-link" href="#software">Tworzenie oprogramowania</a>
            </div>
          </div>
        </div>
      </nav>
);

export default Navbar;