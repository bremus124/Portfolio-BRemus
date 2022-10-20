import React from 'react';
// Here we are importing a CSS file as a dependency
import '../styles/Header.css';
import NavTabs from '../NavTabs';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Portfolio from '../pages/Portfolio';
import Resume from '../pages/Resume';


function Header() {
  return (
    <header className="header">
      <h1>Home</h1>
    </header>
  );
}

export default Header;