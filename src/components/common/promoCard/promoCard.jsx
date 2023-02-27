import React from 'react';
import PropTypes from 'prop-types';

import './promoCard.scss';

const PromoCard = ({ text, subtext, bgClass, waveSrc, imgSrc }) => {
  return (
    <div className={`promo-card promo-card_${bgClass}`}>
      <p className='promo-card__text'>{text}</p>
      <p className='promo-card__subtext'>{subtext}</p>
      <img className='promo-card__wave' src={waveSrc} alt='Wave' />
      <img className='promo-card__image' src={imgSrc} alt='Иконка акции' />
    </div>
  );
};

PromoCard.propTypes = {
  text: PropTypes.string.isRequired,
  subtext: PropTypes.string.isRequired,
  bgClass: PropTypes.string,
  waveSrc: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default PromoCard;
