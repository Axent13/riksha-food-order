import React from 'react';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';

const FoodCategoryButtonList = () => {
  if (foodCategoryInfo) {
    return foodCategoryInfo.map((foodCategory, index) => (
      <FoodCategoryButton key={index} {...foodCategory} />
    ));
  } else {
    return 'Loading...';
  }
};

export default FoodCategoryButtonList;
