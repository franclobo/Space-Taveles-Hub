import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../planet.png';

export default function NavBar() {
  return (
    <>
      <header className="navigation">
        <div className="header">
          <img src={logo} alt="logo" />
          <h1>Space Travelers&apos; Hub</h1>
        </div>
        <nav className="navBar">
          <NavLink className={({ isActive }) => (isActive ? 'linkActive' : 'link')} to="/">Rockets</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'linkActive' : 'link')} to="/missions">Missions</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'linkActive' : 'link')} to="/dragons">Dragons</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'linkActive' : 'link')} to="/myprofile">MyProfile</NavLink>
        </nav>
      </header>
      <div className="line" />
    </>
  );
}
