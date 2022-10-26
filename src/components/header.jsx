import React from 'react';
import Cart from './cart';
import Logo from './logo';
import Navbar from './navbar';
import PhoneNumber from './phoneNumber';
import Profile from './profile';
import FoodCategoryButtonList from './foodCategoryButtonList';

const Header = () => {
  return (
    <header>
      <Logo />
      <Navbar />
      <PhoneNumber />
      <Cart />
      <Profile />
      <FoodCategoryButtonList />
    </header>
  );
};

export default Header;
