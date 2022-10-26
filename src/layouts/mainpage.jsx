import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PromoSlider from '../components/promoSlider';

import './mainpage.scss';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <div className='mainpage__promo-slider'>
        <PromoSlider />
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
