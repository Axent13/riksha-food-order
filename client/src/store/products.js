import { createAction, createSlice } from '@reduxjs/toolkit';
import productService from '../services/product.service';
import isOutdated from '../utils/isOutdated';
import history from '../utils/history';

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
    productCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    productRemoved: (state, action) => {
      state.entities = state.entities.filter(
        (product) => product._id !== action.payload
      );
    },
  },
});

const { reducer: productsReducer, actions } = productsSlice;
const {
  productsRequested,
  productsReceived,
  productsRequestFailed,
  productCreated,
  productRemoved,
} = actions;

const addProductRequested = createAction('products/addProductRequested');
const removeProductRequested = createAction('product/removeProductRequested');

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

export const getProductById = (id) => (state) => {
  if (state.products.entities) {
    return state.products.entities.find((product) => id === product._id);
  }
};

export const getProductsLoadingStatus = () => (state) =>
  state.products.isLoading;

export const createProduct = (payload) => async (dispatch) => {
  dispatch(addProductRequested());
  try {
    const { content } = await productService.createProduct(payload);
    dispatch(productCreated(content));
    history.back();
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};

export const removeProduct = (productId) => async (dispatch) => {
  dispatch(removeProductRequested());
  try {
    const { content } = await productService.removeProduct(productId);
    if (!content) {
      dispatch(productRemoved(productId));
    }
  } catch (error) {
    dispatch(productsRequestFailed(error.message));
  }
};

export default productsReducer;
