import React from 'react';
import FoodCategoryButtonList from '../../common/foodCategory/foodCategoryButtonList';

import './categories.scss';

const Categories = () => {
  return (
    <div className='categories__categories-buttons'>
      <FoodCategoryButtonList />
    </div>
  );
};

export default Categories;
