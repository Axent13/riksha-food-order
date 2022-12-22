import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PromoSlider from '../components/promoSlider';

import './mainpage.scss';
import FeaturesList from '../components/Features/featuresList';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <div className='mainpage__promo-slider'>
        <PromoSlider />
        <FeaturesList />
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
