import React from 'react';
import PropTypes from 'prop-types';
import ProductFeature from './productFeature';
import ProductProperty from './productProperty';

const ProductCard = () => {
  <div className='product-card'>
    <div className='product-card__image-with-icons'>
      <img src='mock/change/me' alt='' />
      <ProductProperty />
      <ProductFeature />
    </div>
    <div className='product-card__weight-kkals-and-variations'>
      <div className='product-card__weight-and-kkals'>
        <p>450 грамм</p>
        <div className='product-card__separator'>*</div>
        <p>130 Ккал</p>
      </div>
      <div className='product-card__variations'>
        <button>30 см</button>
        <div className='product-card__separator'>*</div>
        <button>50 см</button>
        <p className='product-card__variation-adding-price'>+150 ₽</p>
      </div>
    </div>
    <div className='product-card__title-and-components'>
      <p className='product-card__title'>Пицца “Рикша”</p>
      <p className='product-card__components'>
        соус томатный, ветчина, баварские колбаски, сыр моцарелла, колбаса
        салями, прошутто.
      </p>
    </div>
    <div className='product-card__price-and-button'>
      <div className='product-card__prices'>
        <p className='product-card__old-price'>545 ₽</p>
        <p className='product-card__new-price'>499 ₽</p>
      </div>
      <button className='product-card__order-button'>Заказать</button>
    </div>
  </div>;
};

export default ProductCard;
