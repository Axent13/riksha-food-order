import React from 'react';
import PropTypes from 'prop-types';
import ProductFeatures from './productFeatures';
import ProductProperties from './productProperties';
import './productCard.scss';
import Button from '../../common/button/button';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    console.log(`Adding ${product.title} to Cart`);
  };

  return (
    <div className='product-card'>
      <div className='product-card__image-with-icons'>
        <img src={product.imageSrc} alt='' />
        <div className='product-card__properties'>
          <ProductProperties properties={product.properties} />
        </div>
        <div className='product-card__features'>
          <ProductFeatures features={product.features} />
        </div>
      </div>
      <div className='product-card__content'>
        <div className='product-card__weight-and-kkals'>
          <p>{product.weight}</p>
          <div className='product-card__separator'></div>
          <p>{product.kkals}</p>
        </div>
        <div className='product-card__title-and-components'>
          <p className='product-card__title'>{product.title}</p>
          <p className='product-card__components'>{product.components}</p>
        </div>
        <div className='product-card__price-and-button'>
          <div className='product-card__prices'>
            <p className='product-card__old-price'>545 ₽</p>
            <p className='product-card__new-price'>499 ₽</p>
          </div>
          <div className='product-card__order-button'>
            <Button onClickFunction={addToCart} text='Заказать' />
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
