import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './comboMenu.scss';

const СomboMenu = () => {
  const products = useSelector(getProducts());

  return (
    <div className='combo-menu'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default СomboMenu;
