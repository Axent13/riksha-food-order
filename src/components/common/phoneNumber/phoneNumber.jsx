import React from 'react';
import phoneIcon from '../../../assets/phone-fill.png';
import './phoneNumber.scss';

const PhoneNumber = () => {
  return (
    <div>
      <div>
        <img src={phoneIcon} alt='Телефон' />
        <a className='phone-number__link' href='tel:+74956171424'>
          +7 (495) 617-14-24
        </a>
      </div>
      <p className='phone-number__working-time'>c 10:00 до 23:00</p>
    </div>
  );
};

export default PhoneNumber;
