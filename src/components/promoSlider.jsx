import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import promoSliderImgSrc from '../assets/promo-slider-1.jpg';

const PromoSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='promo-slider__main-text'>
          Калифорния{' '}
          <span className='promo-slider__accented-text'>в подарок</span> при
          первом заказе
        </p>
        <p className='promo-slider__addition-text'>от 1500&nbsp;₽</p>
        <img src={promoSliderImgSrc} />
      </div>
      <div>
        <p className='promo-slider__main-text'>
          Калифорния{' '}
          <span className='promo-slider__accented-text'>в подарок</span> при
          первом заказе
        </p>
        <p className='promo-slider__addition-text'>от 2500&nbsp;₽</p>
        <img src={promoSliderImgSrc} />
      </div>
      <div>
        <p className='promo-slider__main-text'>
          Калифорния{' '}
          <span className='promo-slider__accented-text'>в подарок</span> при
          первом заказе
        </p>
        <p className='promo-slider__addition-text'>от 3500&nbsp;₽</p>
        <img src={promoSliderImgSrc} />
      </div>
    </Slider>
  );
};

export default PromoSlider;
