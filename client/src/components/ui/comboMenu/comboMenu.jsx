import React from 'react';
import ProductCard from '../productCard/productCard';
import './comboMenu.scss';

import comboMixImg from '../../../assets/productsImages/combo-mix.png';
import doublePizzaImg from '../../../assets/productsImages/double-pizza.png';
import comboSmallPartyImg from '../../../assets/productsImages/combo-small-party.png';

const products = [
  {
    _id: '8c882663-3b55-49c5-91e9-fda980564235',
    title: 'Комбо микс',
    imageSrc: comboMixImg,
    components: 'Пицца Баварская; Сет Фирменный',
    features: {
      isNew: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '1 499 ₽',
    price: '1 319 ₽',
  },
  {
    _id: '9daef3ef-fd17-42e2-a31c-b21a295dd348',
    title: 'Дабл пицца',
    imageSrc: doublePizzaImg,
    components: 'Пицца Баварская; Пицца 4 Сыра; Coca-cola (1 л)',
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '999 ₽',
    price: '899 ₽',
  },
  {
    _id: '7e738471-169c-44b5-a1fe-0a3da3bbffe7',
    title: 'Комбо Small party',
    imageSrc: comboSmallPartyImg,
    components: 'Пицца Неополитано; Пицца Царская; Сет Суши шок',
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '2 111 ₽',
    price: '1 799 ₽',
  },
];

const СomboMenu = () => {
  return (
    <div className='combo-menu'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default СomboMenu;
