import React from 'react';
import Cart from '../../common/cart/cart';
import FoodCategoryButtonList from '../../foodCategory/foodCategoryButtonList';
import Logo from '../../logo';
import Navbar from '../../common/navbar/navbar';
import PhoneNumber from '../../common/phoneNumber/phoneNumber';
import Profile from '../../common/profile/profile';
import './header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div>
        <Logo />
      </div>
      <div>
        <div className='header__up-part'>
          <Navbar />
          <PhoneNumber />
          <Cart />
          <Profile />
        </div>
        <div className='header__bottom-part'>
          <FoodCategoryButtonList />
        </div>
      </div>
    </header>
  );
};

export default Header;
