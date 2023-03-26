import React from 'react';
import MainPage from './layouts/mainPage/mainPage';
import './App.scss';
import './fonts/fonts.scss';
import AppLoader from './components/hoc/appLoader';
import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryPage from './layouts/categoryPage/categoryPage';
import ProductPage from './layouts/productPage/productPage';
import ScrollToTop from './components/hoc/scrollToTop';
import AuthPage from './layouts/authPage/authPage';
import RegisterPage from './components/ui/registerPage/registerPage';
import EditUserPage from './components/ui/editUserPage/editUserPage';
import CreateProductPage from './layouts/createProductPage/createProductPage';
import UserLoader from './components/hoc/userLoader';
import CartItems from './layouts/cartItems/cartItems';

const App = () => {
  return (
    <>
      <AppLoader>
        <UserLoader>
          <ScrollToTop>
            <Routes>
              <Route index element={<MainPage />} />
              <Route path='category/:categoryName' element={<CategoryPage />} />
              <Route path='product/create' element={<CreateProductPage />} />
              <Route path='product/:productId' element={<ProductPage />} />
              <Route path='cart' element={<CartItems />} />
              <Route path='login' element={<AuthPage />} />
              <Route path='signUp' element={<RegisterPage />} />
              <Route path='editUserProfile' element={<EditUserPage />} />

              <Route path='*' element={<Navigate to='/' />} />
            </Routes>
          </ScrollToTop>
        </UserLoader>
      </AppLoader>
    </>
  );
};

export default App;
