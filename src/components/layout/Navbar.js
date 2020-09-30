import React  from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ marginBottom: '30px'}} className='light-blue darken-4'>
      <div className="nav-wrapper">
        <a href="#!" class="brand-logo right">
          NAIVASHA COSMETICS !
        </a>
        <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a href="sass.html"><i class="material-icons left">home</i>HOME</a></li>
        <li><a href="sass.html"><i class="material-icons left">shopping_cart</i>Solutions</a></li>
        <li><a href="sass.html"><i class="material-icons left">store</i>Products</a></li>
        <li><a href="sass.html"><i class="material-icons left">list</i>LEDGER</a></li>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
