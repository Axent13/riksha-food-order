import React from 'react';
import MainPage from './layouts/mainPage/mainPage';
import './App.scss';
import './fonts/fonts.scss';
import AppLoader from './components/hoc/appLoader';
import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryPage from './layouts/categoryPage/categoryPage';
import ProductPage from './layouts/productPage/productPage';
import ScrollToTop from './components/hoc/scrollToTop';

const App = () => {
  return (
    <>
      <AppLoader>
        <ScrollToTop>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path='category/:categoryName' element={<CategoryPage />} />
            <Route path='product/:productId' element={<ProductPage />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </ScrollToTop>
      </AppLoader>
    </>
  );
};

export default App;
