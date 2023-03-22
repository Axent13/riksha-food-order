import React from 'react';
import Mainpage from './layouts/mainpage';
import './App.scss';
import './fonts/fonts.scss';
import AppLoader from './components/hoc/appLoader';
import { Navigate, Route, Routes } from 'react-router-dom';
import CategoryPage from './layouts/categoryPage';

const App = () => {
  return (
    <>
      <AppLoader>
        <Routes>
          <Route index element={<Mainpage />} />
          <Route path='category/:categoryName' element={<CategoryPage />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </AppLoader>
    </>
  );
};

export default App;
