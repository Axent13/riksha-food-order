import { createSlice } from '@reduxjs/toolkit';
import productService from '../services/product.service';
import isOutdated from '../utils/isOutdated';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    productsReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    productsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: productsReducer, actions } = productsSlice;
const { productsRequested, productsReceived, productsRequestFailed } = actions;

export const loadProductsList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().products;
  if (isOutdated(lastFetch)) {
    dispatch(productsRequested());
    try {
      const { content } = await productService.get();
      dispatch(productsReceived(content));
    } catch (error) {
      dispatch(productsRequestFailed(error.message));
    }
  }
};

export const getProducts = () => (state) => state.products.entities;

export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading;

export default productsReducer;
