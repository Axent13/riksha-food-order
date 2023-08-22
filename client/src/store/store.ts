import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart';
import feedbacksReducer from './feedbacks';
import productsReducer from './products';
import usersReducer from './users';

export const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  cart: cartReducer,
  feedbacks: feedbacksReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
