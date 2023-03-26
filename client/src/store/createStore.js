import cartReducer from './cart';
import productsReducer from './products';
import usersReducer from './users';

const { combineReducers, configureStore } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  cart: cartReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
