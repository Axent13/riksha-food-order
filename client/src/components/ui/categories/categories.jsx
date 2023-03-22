import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import FoodCategoryButtonList from '../../common/foodCategory/foodCategoryButtonList';
import ProductCard from '../productCard/productCard';

import './categories.scss';
import { getProducts } from '../../../store/products';

const Categories = () => {
  const products = useSelector(getProducts());
  const [selectedCategory, setSelectedCategory] = useState('pizza');

  const handleClick = (item) => {
    console.log('item in handleClick:', item);
    setSelectedCategory(item);
  };

  const filteredProducts = products.filter((product) =>
    product.categories.includes(selectedCategory)
  );

  return (
    <div className='categories'>
      <div className='categories__categories-buttons'>
        <FoodCategoryButtonList
          onClickFunction={handleClick}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className='categories__products'>
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
