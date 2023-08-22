import {
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import productService from '../services/product.service';
import isOutdated from '../utils/isOutdated';
import history from '../utils/history';
import { Product } from 'types/models/product';
import { RootState } from './store';

interface ProductsState {
  entities: Product[];
  isLoading: boolean;
  error: string;
  lastFetch: number;
}

const initialState: ProductsState = {
  entities: null,
  isLoading: true,
  error: null,
  lastFetch: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productsRequested: (state) => {
      state.isLoading = true;
    },
    productsReceived: (state, action: PayloadAction<Product[]>) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    productsRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    productCreated: (state, action: PayloadAction<Product>) => {
      state.entities.push(action.payload);
    },
    productRemoved: (state, action: PayloadAction<string>) => {
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

export const loadProductsList =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
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

export const getProducts = () => (state: RootState) => state.products.entities;

export const getProductById = (id: string) => (state: RootState) => {
  if (state.products.entities) {
    return state.products.entities.find((product) => id === product._id);
  }
};

export const getProductsLoadingStatus = () => (state: RootState) =>
  state.products.isLoading;

export const createProduct =
  (payload: Product) => async (dispatch: Dispatch) => {
    dispatch(addProductRequested());
    try {
      const { content } = await productService.createProduct(payload);
      dispatch(productCreated(content));
      history.back();
    } catch (error) {
      dispatch(productsRequestFailed(error.message));
    }
  };

export const removeProduct =
  (productId: string) => async (dispatch: Dispatch) => {
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
