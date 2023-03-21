import React from 'react';
import ProductCard from '../productCard/productCard';
import './topPositions.scss';

import rollPhiladelphiaImg from '../../../assets/productsImages/roll-philadelphia.png';
import rollCreamyShrimpImg from '../../../assets/productsImages/roll-creamy-shrimp.png';

const products = [
  {
    _id: 'd57ac044-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Филадельфия"',
    imageSrc: rollPhiladelphiaImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isBaked: true,
      isSpicy: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '269 ₽',
    price: '219 ₽',
  },
  {
    _id: 'd57ac4d6-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Сливочная креветка"',
    imageSrc: rollCreamyShrimpImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isBaked: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '224 ₽',
    price: '219 ₽',
  },
  {
    _id: 'd57ac6fc-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Чикен энд Чиз"',
    imageSrc: rollPhiladelphiaImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isBaked: true,
      isSpicy: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '232 ₽',
    price: '199 ₽',
  },
];

const TopPositions = () => {
  return (
    <div className='top-positions'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default TopPositions;
