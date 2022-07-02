import React from 'react';
import logo from '../planet.png';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <img src={logo} alt="space logo" />
      <h1>Space travelers&apos; Hub</h1>
      <Navbar />
    </header>
  );
}

export default Header;
