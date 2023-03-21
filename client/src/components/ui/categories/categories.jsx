import React from 'react';
import { useSelector } from 'react-redux';
import FoodCategoryButtonList from '../../common/foodCategory/foodCategoryButtonList';
import ProductCard from '../productCard/productCard';

import './categories.scss';
import { getProducts } from '../../../store/products';

const Categories = () => {
  const products = useSelector(getProducts());

  return (
    <div className='categories'>
      <div className='categories__categories-buttons'>
        <FoodCategoryButtonList />
      </div>
      <div className='categories__products'>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
