import React, { useState } from 'react';
import Cart from '../../common/cart/cart';
import Navbar from '../../common/navbar/navbar';
import PhoneNumber from '../../common/phoneNumber/phoneNumber';
import Profile from '../../common/profile/profile';
import './header.scss';
import { foodCategoryInfo } from '../../common/foodCategory/foodCategoryInfo';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import Logo from '../../logo/logo';

const Header = () => {
  const navigate = useNavigate();

  const [isBurgerMenuShown, setIsBurgerMenuShown] = useState(false);

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
          <div className='header__burger'>
            <button
              className={
                'header__burger-button' +
                (isBurgerMenuShown ? ' header__burger-button_opened' : '')
              }
              onClick={() => setIsBurgerMenuShown((prevState) => !prevState)}
            ></button>
            {isBurgerMenuShown && (
              <div className='header__burger-menu'>
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
            )}
          </div>
          <PhoneNumber />
          <NavLink to='/cart' className='header__cart'>
            <Cart />
          </NavLink>
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
