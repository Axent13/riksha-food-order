import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import PromoSlider from '../components/promoSlider';

import './mainpage.scss';
import FeaturesList from '../components/Features/featuresList';
import topRollImg from '../assets/top-roll.png';
import hugRollsImg from '../assets/hug-rolls.png';
import happyRollImg from '../assets/happy-roll.png';
import tableRollImg from '../assets/table-roll.png';
import messageRollImg from '../assets/message-roll.png';
import SectionHeader from '../components/sectionHeader';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <div className='mainpage__promo-slider'>
        <PromoSlider />
        <FeaturesList />
        <SectionHeader
          text='Топ позиции'
          subText='Новинки'
          leftTopImg={topRollImg}
        />
        <SectionHeader text='Комбо меню' rightCenterImg={hugRollsImg} />
        <SectionHeader text='Акции' rightCenterImg={happyRollImg} />
        <SectionHeader text='Категории' rightCenterImg={tableRollImg} />
        <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
      </div>
      <Footer />
    </>
  );
};

export default Mainpage;
