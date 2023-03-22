import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './topPositions.scss';

const TopPositions = () => {
  const products = useSelector(getProducts());

  const filteredProducts = products.filter(
    (product) => product.features && product.features.isTop
  );

  return (
    <div className='top-positions'>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default TopPositions;
