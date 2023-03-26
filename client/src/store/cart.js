import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    entities: [],
  },
  reducers: {
    cartItemAdded: (state, action) => {
      state.entities.push(action.payload);
    },
    cartItemRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemAdded, cartItemRemoved } = actions;

export const getCartItems = () => (state) => state.cart.entities;

export const addCartItem = (payload) => (dispatch) => {
  dispatch(cartItemAdded(payload));
};

export const removeCartItem = (itemId) => (dispatch) => {
  dispatch(cartItemRemoved(itemId));
};

export default cartReducer;
