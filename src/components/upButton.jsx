import React from 'react';
import upArrow from '../assets/up-button-arrow.png';

const UpButton = () => {
  return (
    <button>
      <img src={upArrow} />
      <p>Наверх</p>
    </button>
  );
};

export default UpButton;
