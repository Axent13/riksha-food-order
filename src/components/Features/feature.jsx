import React from 'react';
import PropTypes from 'prop-types';

const Feature = ({ nameImg, icon, mainText, subText }) => {
  return (
    <div>
      <img src={nameImg} alt={mainText} />
      <div className='feature__circle'>
        <img className='feature__icon' src={icon} />
      </div>
      <p>{mainText}</p>
      <p>{subText}</p>
    </div>
  );
};

Feature.propTypes = {
  nameImg: PropTypes.string.isRequired,
  icon: PropTypes.string,
  mainText: PropTypes.string.isRequired,
  subText: PropTypes.string,
};

export default Feature;
