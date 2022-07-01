import React from 'react';
import Navbar from './Navbar';

function Header() {
  return (
    <header>
      <img src="../planet.png" alt="space logo" />
      <h1>Space traveler&apos;s Hub</h1>
      <Navbar />
    </header>
  );
}

export default Header;
