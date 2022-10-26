import React from 'react';
import PropTypes from 'prop-types';
import cartIcon from '../assets/shopping-cart.png';

const Cart = ({ cartPrice, cartCountItems }) => {
  return (
    <div>
      <div>{cartPrice ?? 0} ₽</div>
      <div>
        <img src={cartIcon} />
        <div>{cartCountItems ?? 0}</div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartPrice: PropTypes.number,
  cartCountItems: PropTypes.number,
};

export default Cart;
