import React from 'react';
import Button from '../../common/button/button';

import intagramImage1 from 'assets/instgamImages/intagramImage1.png';
import intagramImage2 from 'assets/instgamImages/intagramImage2.png';
import intagramImage3 from 'assets/instgamImages/intagramImage3.png';
import intagramImage4 from 'assets/instgamImages/intagramImage4.png';
import intagramImage5 from 'assets/instgamImages/intagramImage5.png';
import intagramImage6 from 'assets/instgamImages/intagramImage6.png';

import './instagramBlock.scss';

const InstagramBlock = () => {
  const handleClick = () => {
    console.log('click on Instagram button');
  };

  return (
    <div className='instagram-block'>
      <div className='instagram-block__header'>
        <p className='instagram-block__text'>
          А вы уже подписались на наш{' '}
          <span className='instagram-block__text_accented'>Instagram?</span>
        </p>
        <Button
          onClickFunction={() => {
            handleClick();
          }}
          text='@riksha_sushi'
          hasInstagramIcon={true}
        />
      </div>
      <div className='instagram-block__images'>
        <img
          className='instagram-block__image instagram-block__image-1'
          src={intagramImage1}
          alt='Фото с Инстаграма'
        />
        <img
          className='instagram-block__image instagram-block__image-2'
          src={intagramImage2}
          alt='Фото с Инстаграма'
        />
        <img
          className='instagram-block__image instagram-block__image-3'
          src={intagramImage3}
          alt='Фото с Инстаграма'
        />
        <img
          className='instagram-block__image instagram-block__image-4'
          src={intagramImage4}
          alt='Фото с Инстаграма'
        />
        <img
          className='instagram-block__image instagram-block__image-5'
          src={intagramImage5}
          alt='Фото с Инстаграма'
        />
        <img
          className='instagram-block__image instagram-block__image-6'
          src={intagramImage6}
          alt='Фото с Инстаграма'
        />
      </div>
    </div>
  );
};

export default InstagramBlock;
