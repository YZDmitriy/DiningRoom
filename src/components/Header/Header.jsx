/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <nav className='header'>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo'>
        Book of Recipes
        </Link>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <a href='https://github.com/YZDmitriy' target="_blank" rel="noreferrer">My Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
