import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/Asset 16.png'


function Navbar() {
  const [click, setClick] = useState(false);
  

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  

  return (
    <>
      <nav className='navbar' >
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu} >
          <img src={logo} alt="" srcset="" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu} >
              Home
            </Link>
          </ul>
          
          <ul className='nav-item'>
            <Link
              to='/about'
              className='nav-links'
              onClick={closeMobileMenu}
              
            >
             About
            </Link>
          </ul>
          <ul className='nav-item'>
            <Link
              to='/Export'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Exports
            </Link>
          </ul>
          <ul className='nav-item'>
            <Link
              to='/manufacturing'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             Manufacturing
            </Link>
          </ul>
          <ul className='nav-item'>
            <Link
              to='/contact'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </ul>
          <ul>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </ul>
        </ul>
       
      </nav>
    </>
  );
}

export default Navbar;
