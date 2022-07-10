import React from 'react';

import Brand from '../assets/images/brand.svg';
import Search from '../assets/images/search.svg';
import Menu from '../assets/images/hamburger.svg';

const Navbar = () => {
  return (
    <div className="dashboard-navbar">
      <img
        src={Brand}
        className="dashboard-navbar__brand"
        alt="Crypto tracker"
      />
      <div className="dashboard-navbar__item">
        <img
          src={Search}
          className='dashboard-navbar__item-search m-5'
          alt="Search"
        />
        <img
          src={Menu}
          className='dashboard-navbar__item-burger m-5'
          alt="Menu"
        />
      </div>
    </div>
  );
}

export default Navbar;
