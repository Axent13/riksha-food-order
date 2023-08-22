import React from 'react';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './topPositions.scss';
import { useTypedSelector } from 'components/hooks/reduxToolkitHooks';

const TopPositions = () => {
  const products = useTypedSelector(getProducts());

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
