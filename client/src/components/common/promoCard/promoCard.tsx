import React from 'react';
import './promoCard.scss';

interface PromoCardProps {
  text: string;
  subtext: string;
  bgClass?: string;
  waveSrc: string;
  imgSrc: string;
}

const PromoCard = ({
  text,
  subtext,
  bgClass,
  waveSrc,
  imgSrc,
}: PromoCardProps) => {
  return (
    <div className={`promo-card promo-card_${bgClass}`}>
      <p className='promo-card__text'>{text}</p>
      <p className='promo-card__subtext'>{subtext}</p>
      <img className='promo-card__wave' src={waveSrc} alt='Wave' />
      <img className='promo-card__image' src={imgSrc} alt='Иконка акции' />
    </div>
  );
};

export default PromoCard;
