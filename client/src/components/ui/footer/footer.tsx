import React from 'react';
import { NavLink } from 'react-router-dom';

import facebookIcon from 'assets/facebook-icon.png';
import instagramIcon from 'assets/instagram-icon.png';
import vkIcon from 'assets/vk-icon.png';

import './footer.scss';
import Logo from '../../logo/logo';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <div className='footer__logo'>
          <Logo type='whiteText' />
        </div>
        <div className='footer__links-and-socials'>
          <ul className='footer__links'>
            <li className='footer__link-container'>
              <NavLink to='/about-us' className='footer__link'>
                О нас
              </NavLink>
            </li>
            <li className='footer__link-container'>
              <NavLink to='/delivery-and-payment' className='footer__link'>
                Доставка и оплата
              </NavLink>
            </li>
            <li className='footer__link-container'>
              <NavLink to='/contacts' className='footer__link'>
                Контакты
              </NavLink>
            </li>
          </ul>
          <ul className='footer__socials'>
            <li className='footer__social-link-container'>
              <a href='mock/change/me' className='footer__social-link'>
                <img
                  src={facebookIcon}
                  alt='facebook'
                  className='footer__social-image'
                />
              </a>
            </li>
            <li className='footer__social-link-container'>
              <a href='mock/change/me' className='footer__social-link'>
                <img
                  src={instagramIcon}
                  alt='instagram'
                  className='footer__social-image'
                />
              </a>
            </li>
            <li className='footer__social-link-container'>
              <a href='mock/change/me' className='footer__social-link'>
                <img src={vkIcon} alt='vk' className='footer__social-image' />
              </a>
            </li>
          </ul>
        </div>
        <ul className='footer__categories'>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Пицца
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Суши
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Роллы
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Сеты
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Wok
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Напитки
            </a>
          </li>
          <li className='footer__category-container'>
            <a href='mock/change/me' className='footer__category-link'>
              Закуски
            </a>
          </li>
        </ul>
        <div className='footer__phone-and-copyright'>
          <p className='footer__phone-container'>
            <a href='tel:+74956171424' className='footer__phone-link'>
              +7 (495) 617-14-24
            </a>
          </p>
          <p className='footer__working-time'>c 10:00 до 23:00</p>
          <p className='footer__copyright'>© Рикша. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
