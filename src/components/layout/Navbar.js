import React from 'react';
import Favsunvait from './favsunvait.jpeg';
// // import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="blue darken-4">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">
              <img src={Favsunvait}></img>
            </a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">Company</a>
              </li>
              <li>
                <a href="collapsible.html">Products</a>
              </li>
              <li>
                <a href="mobile.html">Services</a>
              </li>
              <li>
                <a href="mobile.html">Pricing</a>
              </li>
              <li>
                <a href="mobile.html">Blog</a>
              </li>
              <li>
                <a class="dropdown-trigger" href="#!" data-target="dropdown1">
                  Dropdown<i class="material-icons right">arrow_drop_down</i>
                </a>
              </li>

              <li>
                <a className="btn waves-effect waves-light blue-darken-4">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul id="dropdown1" class="dropdown-content">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
