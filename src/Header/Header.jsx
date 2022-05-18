/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export function Header() {
  return (
    <nav className= 'header'>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">React Shop</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="https://github.com/YZDmitriy">Repo</a></li>
      </ul>
    </div>
  </nav>
  );
}