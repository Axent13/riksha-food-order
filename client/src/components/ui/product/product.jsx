import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../../store/products';

import './product.scss';
import Image from '../../common/image/image';
import ProductFeatures from '../productCard/productFeatures';
import ProductProperties from '../productCard/productProperties';
import Button from '../../common/button/button';
import { addCartItem } from '../../../store/cart';

const Product = ({ productId }) => {
  const product = useSelector(getProductById(productId));
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addCartItem(product));
  };

  return (
    <div className='product'>
      <div className='product__image-with-icons'>
        <Image image={product.image} />
        {product.properties && (
          <div className='product__properties'>
            <ProductProperties properties={product.properties} />
          </div>
        )}
        {product.features && (
          <div className='product__features'>
            <ProductFeatures features={product.features} />
          </div>
        )}
      </div>
      <div className='product__info-and-order'>
        <div className='product__info'>
          <p className='product__title'>{product.title}</p>
          {product.weight && (
            <p className='product__weight'>
              Вес:{' '}
              <span className='product__weight-value'>
                {product.weight} грамм
              </span>
            </p>
          )}
          {product.kkals && (
            <p className='product__kkals'>
              Калорийность:
              <span className='product__weight-value'>
                {product.kkals} ккал
              </span>
            </p>
          )}
          <p className='product__components-title'>Состав:</p>
          <p className='product__components'>{product.components}</p>
        </div>
        <div className='product__price-and-button'>
          <div className='product__prices'>
            <p className='product__old-price'>
              {product.oldPrice && `${product.oldPrice} ₽`}
            </p>
            <p className='product__new-price'>{product.price} ₽</p>
          </div>
          <div className='product__order-button'>
            <Button onClickFunction={addToCart} text='Заказать' />
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default Product;
