import React, { useState } from 'react';
import './MenuContainer.css';

const MenuContainer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <button className="hamburger" id="menuBtn" onClick={handleMenuToggle}>
        Menu
      </button>
      <ul className={`menu${open ? ' open' : ''}`} id="menu">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default MenuContainer; 