import React from 'react';
import PropTypes from 'prop-types';
import ProductFeature from './productFeature';
import ProductProperty from './productProperty';

const ProductCard = ({ product }) => {
  return (
    <div className='product-card'>
      <div className='product-card__image-with-icons'>
        <img src={product.imageSrc} alt='' />
        <ProductProperty properties={product.properties} />
        <ProductFeature features={product.features} />
      </div>
      <div className='product-card__weight-kkals-and-variations'>
        <div className='product-card__weight-and-kkals'>
          <p>{product.weight}</p>
          <div className='product-card__separator'>*</div>
          <p>{product.kkals}</p>
        </div>

        {product.variations && (
          // TODO: add variations parsing
          <div className='product-card__variations'>
            <button>30 см</button>
            <div className='product-card__separator'>*</div>
            <button>50 см</button>
            <p className='product-card__variation-adding-price'>+150 ₽</p>
          </div>
        )}
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
        <button className='product-card__order-button'>Заказать</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
