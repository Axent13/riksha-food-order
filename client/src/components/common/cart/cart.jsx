import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import cartIcon from '../../../assets/shopping-cart.png';
import { getCartItems } from '../../../store/cart';
import './cart.scss';

const Cart = () => {
  const cartItems = useSelector(getCartItems());
  const [cartPrice, setCartPrice] = useState();
  const [cartCountItems, setCartCountItems] = useState();

  useEffect(() => {
    if (cartItems.length !== 0) {
      setCartPrice(cartItems.reduce((sum, item) => sum + item.price, 0));
      setCartCountItems(cartItems.length);
    }
  }, [cartItems.length]);

  return (
    <div className='cart'>
      <div className='cart__price'>{cartPrice ? `${cartPrice} ₽` : '0 ₽'}</div>
      <div className='cart__delimiter'></div>
      <div className='cart__icon-and-items'>
        <img className='cart__icon' src={cartIcon} />
        <div className='cart__items'>{cartCountItems ?? 0}</div>
      </div>
    </div>
  );
};

export default Cart;
