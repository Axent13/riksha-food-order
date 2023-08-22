import React from 'react';
import PromoCard from '../../common/promoCard/promoCard';
import './promos.scss';

import waveImg from 'assets/promosImages/wave.png';
import promoFirstImg from 'assets/promosImages/promo-1.png';
import promoSecondImg from 'assets/promosImages/promo-2.png';
import promoThirdImg from 'assets/promosImages/promo-3.png';

const promos = [
  {
    _id: 'aecf6323-b2dc-4ed7-82d8-dc6f453940cd',
    text: 'Празднуй день рождения вместе с нами',
    subtext: 'Ролл в подарок при заказе в день рождения',
    bgClass: 'blue',
    waveSrc: waveImg,
    imgSrc: promoFirstImg,
  },
  {
    _id: 'b2db4791-3cb5-416c-8ffd-af67064f3120',
    text: 'Доставим заказ за 60 мин',
    subtext: 'или проморол за опоздание',
    bgClass: 'red',
    waveSrc: waveImg,
    imgSrc: promoSecondImg,
  },
  {
    _id: '0b313775-f467-433f-8bab-d1fdc9b175c0',
    text: 'Празднуй день рождения вместе с нами',
    subtext: 'Ролл в подарок при заказе в день рождения',
    bgClass: 'green',
    waveSrc: waveImg,
    imgSrc: promoThirdImg,
  },
];

const Promos = () => {
  return (
    <div className='promos'>
      {promos.map((promo) => (
        <PromoCard key={promo._id} {...promo} />
      ))}
    </div>
  );
};

export default Promos;
