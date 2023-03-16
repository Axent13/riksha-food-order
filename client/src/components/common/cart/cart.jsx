import React from 'react';
import PropTypes from 'prop-types';
import cartIcon from '../../../assets/shopping-cart.png';
import './cart.scss';

const Cart = ({ cartPrice, cartCountItems }) => {
  return (
    <div className='cart'>
      <div className='cart__price'>{cartPrice ?? 0} ₽</div>
      <div className='cart__delimiter'></div>
      <div className='cart__icon-and-items'>
        <img className='cart__icon' src={cartIcon} />
        <div className='cart__items'>{cartCountItems ?? 0}</div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartPrice: PropTypes.number,
  cartCountItems: PropTypes.number,
};

export default Cart;
