import React from 'react';
import Header from '../../components/ui/header/header';

import './productPage.scss';
import messageRollImg from '../../assets/message-roll.png';
import SectionHeader from '../../components/common/sectionHeader/sectionHeader';
import AboutCompany from '../../components/ui/aboutCompany/aboutCompany';
import Footer from '../../components/ui/footer/footer';
import { useParams } from 'react-router-dom';
import Product from '../../components/ui/product/product';
import BackToCatalogButton from '../../components/common/backToCatalogButton/backToCatalogButton';
import { useSelector } from 'react-redux';
import { getProductById } from '../../store/products';

const ProductPage = () => {
  const { productId } = useParams();
  const productData = useSelector(getProductById(productId));
  const categoryName = productData?.categories[0];

  return (
    <>
      <Header />
      {/* ProductPage content */}
      <section className='product-page__back-button'>
        <BackToCatalogButton categoryName={categoryName} />
      </section>
      <hr className='product-page__delimiter' />
      <section className='product-page__product'>
        <Product productId={productId} />
      </section>
      <section className='product-page__about-company'>
        <SectionHeader text='О компании' rightCenterImg={messageRollImg} />
        <AboutCompany />
      </section>
      <section className='product-page__footer'>
        <Footer />
      </section>
    </>
  );
};

export default ProductPage;
