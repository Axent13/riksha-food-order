import React from 'react';
import Mainpage from './layouts/mainpage';
import './App.scss';
import './fonts/fonts.scss';
import AppLoader from './components/hoc/appLoader';

const App = () => {
  return (
    <>
      <AppLoader>
        <Mainpage />
      </AppLoader>
    </>
  );
};

export default App;
