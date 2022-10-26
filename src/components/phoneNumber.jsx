import React from 'react';
import phoneIcon from '../assets/phone-fill.png';

const PhoneNumber = () => {
  return (
    <div>
      <img src={phoneIcon} alt='Телефон' />
      <a href='tel:+74956171424'>+7 (495) 617-14-24</a>
    </div>
  );
};

export default PhoneNumber;
