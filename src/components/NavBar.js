import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav className="navBar">
    <ul className="navBar-ul">
      <li className="navBar-item">
        <NavLink to="/">
          Books
        </NavLink>
      </li>
      <li className="navBar-item">
        <NavLink to="/Categories">
          Categories
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
