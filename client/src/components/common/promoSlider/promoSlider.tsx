import React from 'react';
import Slider from 'react-slick';
import './promoSlider.scss';

import promoSliderFirstImgSrc from 'assets/promo-slider-1.jpg';
import promoSliderSecondImgSrc from 'assets/promo-slider-2.jpg';
import Button from '../button/button';

interface SliderArrowProps {
  isLeft?: boolean;
  onClick?(): void;
}

const SliderArrow = ({ isLeft = false, onClick }: SliderArrowProps) => {
  return (
    <div
      className={
        'promo-slider__arrow' + (isLeft ? ' promo-slider__arrow_left' : '')
      }
      onClick={onClick}
    ></div>
  );
};

const PromoSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SliderArrow />,
    prevArrow: <SliderArrow isLeft={true} />,
  };

  const firstButtonClick = () => {
    console.log('Link to promos');
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
        <div className='promo-slider__more-button'>
          <Button
            onClickFunction={firstButtonClick}
            text='Подробнее'
            isRounded={true}
          />
        </div>
      </div>
      <div className='promo-slider'>
        <div className='promo-slider__text'>
          <p className='promo-slider__text-main'>
            Вкуснейшие <span className='promo-slider__text-accented'>сеты</span>
          </p>
          <p className='promo-slider__text-addition'>от 2500&nbsp;₽</p>
        </div>
        <img src={promoSliderSecondImgSrc} />
        <div className='promo-slider__more-button'>
          <Button
            onClickFunction={firstButtonClick}
            text='Подробнее'
            isRounded={true}
          />
        </div>
      </div>
    </Slider>
  );
};

export default PromoSlider;
