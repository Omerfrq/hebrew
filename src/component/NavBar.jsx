import React from 'react';
import logo from '../assets/images/General/logo.png';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
  const history = useHistory();
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
          <Link to='/'>
            <img alt='logo' src={logo} />
          </Link>
        </div>
      </div>
      <div class='nav-links'>
        <div className='logo-in-links'>
          <img alt='logo' src={logo} />
        </div>
        <Link to='/measurements'>מדידות ומיפוי</Link>
        <Link to='/3d'>תלת מימד</Link>

        <button onClick={() => history.push('/')} className='price-suggestion'>
          קבלו הצעת מחיר
        </button>
      </div>
    </div>
  );
};
export default NavBar;
