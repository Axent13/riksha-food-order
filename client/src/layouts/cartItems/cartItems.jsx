/* eslint-disable multiline-ternary */
import React from 'react';
import './cartItems.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, removeCartItem } from '../../store/cart';
import { Link } from 'react-router-dom';
import Button from '../../components/common/button/button';

const CartItems = () => {
  const cartItems = useSelector(getCartItems());
  const dispatch = useDispatch();

  const handleDeleteClick = (itemId) => {
    dispatch(removeCartItem(itemId));
  };

  return (
    <div className='cart-items'>
      <div className='cart-items__card'>
        <h2 className='cart-items__header'>Корзина</h2>
        {cartItems.length !== 0 ? (
          cartItems.map((item, index) => (
            <>
              <div className='cart-items__item' key={index}>
                <div className='cart-items__group'>
                  <p className='cart-items__title'>Наименование</p>
                  <p className='cart-items__content'>{item.title}</p>
                </div>
                <div className='cart-items__group'>
                  <p className='cart-items__title'>Стоимость</p>
                  <p className='cart-items__content cart-items__content_right'>
                    {item.price} ₽
                  </p>
                </div>
              </div>
              <div className='cart-items__delete'>
                <Button
                  text='Убрать из корзины'
                  onClickFunction={() => {
                    handleDeleteClick(item._id);
                  }}
                />
              </div>
            </>
          ))
        ) : (
          <div>В корзине пока нет товаров...</div>
        )}
        <Link to='/'>
          <button className='cart-items__button'> Назад к товарам</button>
        </Link>
      </div>
    </div>
  );
};

export default CartItems;
