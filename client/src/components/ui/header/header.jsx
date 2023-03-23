import React from 'react';
import Cart from '../../common/cart/cart';
import Logo from '../../logo';
import Navbar from '../../common/navbar/navbar';
import PhoneNumber from '../../common/phoneNumber/phoneNumber';
import Profile from '../../common/profile/profile';
import './header.scss';
import { foodCategoryInfo } from '../../common/foodCategory/foodCategoryInfo';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className='header'>
      <div className='header__top-part-and-logo-wrapper'>
        <div className='header__logo'>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <div className='header__up-part'>
          <Navbar />
          <PhoneNumber />
          <Cart />
          <Profile />
        </div>
      </div>
      <div className='header__bottom-part'>
        <div className='header__bottom-part-wrapper'>
          {foodCategoryInfo.map((category, index) => (
            <button
              key={index}
              className='header__button'
              onClick={() => {
                navigate(`/category/${category.categoryName}`, {
                  replace: true,
                });
              }}
            >
              <img src={category.image} alt={category.text} />
              <span className='header__button-text'>{category.text}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
