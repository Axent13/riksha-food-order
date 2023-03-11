import React from 'react';
import FoodCategoryButtonList from '../../common/foodCategory/foodCategoryButtonList';
import ProductCard from '../productCard/productCard';

import rollPhiladelphiaImg from '../../../assets/productsImages/roll-philadelphia.png';
import rollCreamyShrimpImg from '../../../assets/productsImages/roll-creamy-shrimp.png';

import './categories.scss';

const products = [
  {
    _id: 'd57ac044-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Филадельфия"',
    imageSrc: rollPhiladelphiaImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isHotRoll: true,
      isSpicy: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '269 ₽',
    newPrice: '219 ₽',
  },
  {
    _id: 'd57ac4d6-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Сливочная креветка"',
    imageSrc: rollCreamyShrimpImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isHotRoll: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '224 ₽',
    newPrice: '219 ₽',
  },
  {
    _id: 'd57ac6fc-a8fe-11ed-afa1-0242ac120002',
    title: 'Ролл "Чикен энд Чиз"',
    imageSrc: rollPhiladelphiaImg,
    components: 'Лосось, сыр "Филадельфия", огурец, авокадо',
    properties: {
      isHotRoll: true,
      isSpicy: true,
    },
    features: {
      isTop: true,
    },
    weight: '200 грамм',
    kkals: '130 Ккал',
    oldPrice: '232 ₽',
    newPrice: '199 ₽',
  },
];

const Categories = () => {
  return (
    <div className='categories'>
      <div className='categories__categories-buttons'>
        <FoodCategoryButtonList />
      </div>
      <div className='categories__products'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
