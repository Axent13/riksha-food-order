import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to='/about-us'>О нас</Link>
      </li>
      <li>
        <Link to='/delivery'>Доставка и оплата</Link>
      </li>
      <li>
        <Link to='/contacts'>Контакты</Link>
      </li>
      <li>
        <Link to='/bonus'>Бонусы</Link>
      </li>
      <li>
        <Link to='/vacancy'>Вакансии</Link>
      </li>
    </ul>
  );
};

export default Navbar;
