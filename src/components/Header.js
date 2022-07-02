import React from 'react';
import logo from '../planet.png';
import Navbar from './Navbar';

function Header() {
  return (
    <>
      <header>
        <img className="logo" src={logo} alt="space logo" />
        <h1 className="title">Space travelers&apos; Hub</h1>
        <Navbar className="navbar" />
      </header>
      <div className="line" />
    </>
  );
}

export default Header;
