import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './topPositions.scss';

const TopPositions = () => {
  const products = useSelector(getProducts());

  return (
    <div className='top-positions'>
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default TopPositions;
