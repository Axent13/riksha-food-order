import React from 'react';
import Header from '../components/ui/header/header';
import PromoSlider from '../components/common/promoSlider/promoSlider';

import './mainpage.scss';
import topRollImg from '../assets/top-roll.png';
import happyRollImg from '../assets/happy-roll.png';
import tableRollImg from '../assets/table-roll.png';
import messageRollImg from '../assets/message-roll.png';
import SectionHeader from '../components/common/sectionHeader/sectionHeader';
import TopPositions from '../components/ui/topPositions/topPositions';
import FeaturesList from '../components/common/features/featuresList';
import Promos from '../components/ui/promos/promos';
import Categories from '../components/ui/categories/categories';
import AboutCompany from '../components/ui/aboutCompany/aboutCompany';
import InstagramBlock from '../components/ui/instagramBlock/instagramBlock';
import Footer from '../components/ui/footer/footer';

const Mainpage = () => {
  return (
    <>
      <Header />
      {/* Mainpage content */}
      <section className='mainpage__promo-slider'>
        <PromoSlider />
      </section>
      <section className='mainpage__features-list'>
        <FeaturesList />
      </section>
      <section className='mainpage__top-positions'>
        <SectionHeader
          text='Топ позиции'
          subText='Новинки'
          leftTopImg={topRollImg}
        />
        <TopPositions />
      </section>
      <section className='mainpage__promos'>
        <SectionHeader text='Акции' rightCenterImg={happyRollImg} />
        <Promos />
      </section>
      <section className='mainpage__categories'>
        <SectionHeader text='Категории' rightCenterImg={tableRollImg} />
        <Categories />
      </section>
      <section className='mainpage__about-company'>
        <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
        <AboutCompany />
      </section>
      <section className='mainpage__instagram'>
        <InstagramBlock />
      </section>
      <section className='mainpage__footer'>
        <Footer />
      </section>
    </>
  );
};

export default Mainpage;
