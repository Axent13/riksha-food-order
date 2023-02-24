import React from 'react';
import Slider from 'react-slick';
import './promoSlider.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import promoSliderFirstImgSrc from '../../../assets/promo-slider-1.jpg';
import promoSliderSecondImgSrc from '../../../assets/promo-slider-2.jpg';

const PromoSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className='promo-slider'>
        <div className='promo-slider__text'>
          <p className='promo-slider__text-main'>
            Калифорния{' '}
            <span className='promo-slider__text-accented'>в подарок</span> при
            первом заказе
          </p>
          <p className='promo-slider__text-addition'>от 1500&nbsp;₽</p>
        </div>
        <img src={promoSliderFirstImgSrc} />
      </div>
      <div className='promo-slider'>
        <div className='promo-slider__text'>
          <p className='promo-slider__text-main'>
            Вкуснейшие <span className='promo-slider__text-accented'>сеты</span>
          </p>
          <p className='promo-slider__text-addition'>от 2500&nbsp;₽</p>
        </div>
        <img src={promoSliderSecondImgSrc} />
      </div>
    </Slider>
  );
};

export default PromoSlider;
