import React, { useEffect, useState } from 'react';
import api from '../api';
import FoodCategoryButton from './foodCategoryButton';

const FoodCategoryButtonList = () => {
  const [foodCategoryList, setFoodCategoryList] = useState();

  useEffect(() => {
    api.foodCategories.fetchAll().then((data) => setFoodCategoryList(data));
  }, []);

  if (foodCategoryList) {
    return foodCategoryList.map((foodCategory) => (
      <FoodCategoryButton key={foodCategory._id} {...foodCategory} />
    ));
  } else {
    return 'Loading...';
  }
};

export default FoodCategoryButtonList;
