import React from 'react';
import logo from '../assets/images/General/logo.png';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'nav active' : 'nav'}>
      <div class='nav-btn'>
        <label for='nav-check'>
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <input type='checkbox' id='nav-check' />
      <div class='nav-header'>
        <div class='nav-title'>
          <NavLink activeClassName='active-red' to='/'>
            <img alt='logo' src={logo} />
          </NavLink>
        </div>
      </div>
      <div class='nav-links'>
        <div className='logo-in-links'>
          <img alt='logo' src={logo} />
        </div>

        <div className='nav-links-box'>
          <NavLink activeClassName='active-red' to='/measurements'>
            מדידות ומיפוי
          </NavLink>
          <NavLink activeClassName='active-red' to='/3d'>
            תלת מימד
          </NavLink>
        </div>

        <div className='price-container'>
          <button
            onClick={() =>
              (window.location.href = `${window.location.origin}/#contact-form`)
            }
            className='price-suggestion'
          >
            קבלו הצעת מחיר
          </button>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
