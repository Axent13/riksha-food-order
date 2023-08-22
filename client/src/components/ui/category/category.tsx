import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './category.scss';

interface CategoryProps {
  categoryName?: string;
}

const Category = ({ categoryName }: CategoryProps) => {
  const products = useSelector(getProducts());

  const filteredProducts = products.filter((product) =>
    product.categories.includes(categoryName)
  );

  return (
    <div className='category'>
      {filteredProducts.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Category;
