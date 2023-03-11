import React from 'react';
import Header from '../components/ui/header/header';
import Footer from '../components/footer';
import PromoSlider from '../components/common/promoSlider/promoSlider';

import './mainpage.scss';
import topRollImg from '../assets/top-roll.png';
import hugRollsImg from '../assets/hug-rolls.png';
import happyRollImg from '../assets/happy-roll.png';
import tableRollImg from '../assets/table-roll.png';
import messageRollImg from '../assets/message-roll.png';
import SectionHeader from '../components/common/sectionHeader/sectionHeader';
import TopPositions from '../components/ui/topPositions/topPositions';
import ComboMenu from '../components/ui/comboMenu/comboMenu';
import FeaturesList from '../components/common/features/featuresList';
import Promos from '../components/ui/promos/promos';
import Categories from '../components/ui/categories/categories';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <div className='mainpage__promo-slider'>
        <PromoSlider />
      </div>
      <div className='mainpage__features-list'>
        <FeaturesList />
      </div>
      <div className='mainpage__top-positions'>
        <SectionHeader
          text='Топ позиции'
          subText='Новинки'
          leftTopImg={topRollImg}
        />
        <TopPositions />
      </div>
      <div className='mainpage__combo-menu'>
        <SectionHeader text='Комбо меню' rightCenterImg={hugRollsImg} />
        <ComboMenu />
      </div>
      <div className='mainpage__promos'>
        <SectionHeader text='Акции' rightCenterImg={happyRollImg} />
        <Promos />
      </div>
      <div className='mainpage__categories'>
        <SectionHeader text='Категории' rightCenterImg={tableRollImg} />
        <Categories />
      </div>
      <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
      <Footer />
    </>
  );
};

export default Mainpage;
