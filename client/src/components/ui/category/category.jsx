import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './category.scss';

const Category = ({ categoryName }) => {
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

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
