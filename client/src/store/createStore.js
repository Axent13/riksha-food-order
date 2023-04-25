import cartReducer from './cart';
import feedbacksReducer from './feedbacks';
import productsReducer from './products';
import usersReducer from './users';

const { combineReducers, configureStore } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  cart: cartReducer,
  feedbacks: feedbacksReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
