import React from 'react';
import Header from '../../components/ui/header/header';

import './categoryPage.scss';
import messageRollImg from '../../assets/message-roll.png';
import SectionHeader from '../../components/common/sectionHeader/sectionHeader';
import AboutCompany from '../../components/ui/aboutCompany/aboutCompany';
import Footer from '../../components/ui/footer/footer';
import { useParams } from 'react-router-dom';
import { foodCategoryInfo } from '../../components/common/foodCategory/foodCategoryInfo';
import Category from '../../components/ui/category/category';
import Dropdown from '../../components/common/form/dropdown/dropdown';

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categoryNameText = foodCategoryInfo.find(
    (category) => category.categoryName === categoryName
  )?.text;

  const dropdownOptions = [
    'По умолчанию',
    'Название (А - Я)',
    'Название (Я - А)',
    'Цена (низкая > высокая)',
    'Цена (высокая > низкая)',
  ];

  return (
    <>
      <Header />
      {/* CategoryPage content */}
      <section className='category-page__content'>
        <SectionHeader text={categoryNameText} />
        <div className='category-page__dropdown'>
          <Dropdown options={dropdownOptions} displayedName='Сортировка' />
        </div>
        <Category categoryName={categoryName} />
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
