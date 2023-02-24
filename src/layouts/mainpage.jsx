import React from 'react';
import Header from '../components/ui/header/header';
import Footer from '../components/footer';
import PromoSlider from '../components/common/promoSlider/promoSlider';

import './mainpage.scss';
import FeaturesList from '../components/Features/featuresList';
import topRollImg from '../assets/top-roll.png';
import hugRollsImg from '../assets/hug-rolls.png';
import happyRollImg from '../assets/happy-roll.png';
import tableRollImg from '../assets/table-roll.png';
import messageRollImg from '../assets/message-roll.png';
import SectionHeader from '../components/sectionHeader';
import TopPositions from '../components/ui/topPositions/topPositions';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <div className='mainpage__promo-slider'>
        <PromoSlider />
      </div>
      <FeaturesList />
      <SectionHeader
        text='Топ позиции'
        subText='Новинки'
        leftTopImg={topRollImg}
      />
      <TopPositions />
      <SectionHeader text='Комбо меню' rightCenterImg={hugRollsImg} />
      <SectionHeader text='Акции' rightCenterImg={happyRollImg} />
      <SectionHeader text='Категории' rightCenterImg={tableRollImg} />
      <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
      <Footer />
    </>
  );
};

export default Mainpage;
