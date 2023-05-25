import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  return (
    <ul className='navbar'>
      <li>
        <Link className='navbar__link' to='/about-us'>
          О нас
        </Link>
      </li>
      <li>
        <Link className='navbar__link' to='/delivery'>
          Доставка и оплата
        </Link>
      </li>
      <li>
        <Link className='navbar__link' to='/contacts'>
          Контакты
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
