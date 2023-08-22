import { Dispatch, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Product } from 'types/models/product';

interface CartState {
  entities: Product[];
}

const initialState: CartState = { entities: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    cartItemAdded: (state, action: PayloadAction<Product>) => {
      state.entities.push(action.payload);
    },
    cartItemRemoved: (state, action: PayloadAction<string>) => {
      state.entities = state.entities.filter(
        (item) => item._id !== action.payload
      );
    },
  },
});

const { reducer: cartReducer, actions } = cartSlice;
const { cartItemAdded, cartItemRemoved } = actions;

export const getCartItems = () => (state: RootState) => {
  return state.cart.entities;
};

export const addCartItem = (payload: Product) => (dispatch: Dispatch) => {
  dispatch(cartItemAdded(payload));
};

export const removeCartItem = (itemId: string) => (dispatch: Dispatch) => {
  dispatch(cartItemRemoved(itemId));
};

export default cartReducer;
