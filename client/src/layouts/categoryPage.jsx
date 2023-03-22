import React from 'react';
import Header from '../components/ui/header/header';

import './categoryPage.scss';
import messageRollImg from '../assets/message-roll.png';
import SectionHeader from '../components/common/sectionHeader/sectionHeader';
import AboutCompany from '../components/ui/aboutCompany/aboutCompany';
import Footer from '../components/ui/footer/footer';
import { Navigate, useParams } from 'react-router-dom';
import { foodCategoryInfo } from '../components/common/foodCategory/foodCategoryInfo';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categoryNameText = foodCategoryInfo.find(
    (category) => category.categoryName === categoryName
  )?.text;

  if (!categoryNameText) {
    <Navigate to='/' />;
  }

  return (
    <>
      <Header />
      {/* CategoryPage content */}
      <section className='category-page__content'>
        <SectionHeader text={categoryNameText} />
      </section>
      <section className='category-page__about-company'>
        <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
        <AboutCompany />
      </section>
      <section className='category-page__footer'>
        <Footer />
      </section>
    </>
  );
};

export default CategoryPage;
