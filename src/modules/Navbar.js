import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 2,
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <nav className="navBar">
      {links.map((link) => (
        <NavLink key={link.id} className="link" to={link.path}>
          {link.text}
        </NavLink>
      ))}
    </nav>
  );
}
export default Navbar;
