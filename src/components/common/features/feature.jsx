import React from 'react';
import PropTypes from 'prop-types';
import './feature.scss';

const Feature = ({ nameImg, icon, mainText, subText }) => {
  return (
    <div className='feature'>
      <img className='feature__name' src={nameImg} alt={mainText} />
      <div className='feature__circle'>
        <img className='feature__icon' src={icon} />
      </div>
      <p className='feature__text-main'>{mainText}</p>
      <p className='feature__text-sub'>{subText}</p>
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
