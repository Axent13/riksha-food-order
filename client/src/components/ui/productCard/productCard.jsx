import React from 'react';
import PropTypes from 'prop-types';
import ProductFeatures from './productFeatures';
import ProductProperties from './productProperties';
import './productCard.scss';
import Button from '../../common/button/button';
import Image from '../../common/image/image';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const addToCart = () => {
    console.log(`Adding ${product.title} to Cart`);
  };

  return (
    <div className='product-card'>
      <Link to={`/product/${product._id}`}>
        <div className='product-card__image-with-icons'>
          <Image image={product.image} />
          {product.properties && (
            <div className='product-card__properties'>
              <ProductProperties properties={product.properties} />
            </div>
          )}
          {product.features && (
            <div className='product-card__features'>
              <ProductFeatures features={product.features} />
            </div>
          )}
        </div>
      </Link>
      <div className='product-card__content'>
        <div className='product-card__weight-and-kkals'>
          {product.weight && <p> {product.weight}</p>}
          {product.weight && product.kkals && (
            <div className='product-card__separator'></div>
          )}
          {product.kkals && <p>{product.kkals}</p>}
        </div>
        <div className='product-card__title-and-components'>
          <p className='product-card__title'>{product.title}</p>
          <p className='product-card__components'>{product.components}</p>
        </div>
        <div className='product-card__price-and-button'>
          <div className='product-card__prices'>
            <p className='product-card__old-price'>{product.oldPrice}</p>
            <p className='product-card__new-price'>{product.price}</p>
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
