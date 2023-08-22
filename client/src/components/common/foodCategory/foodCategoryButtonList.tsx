import React from 'react';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';
import Loader from '../loader/loader';

interface FoodCategoryButtonListProps {
  onClickFunction?(item: string): void;
  selectedCategory?: string;
}

const FoodCategoryButtonList = ({
  onClickFunction,
  selectedCategory,
}: FoodCategoryButtonListProps) => {
  if (foodCategoryInfo) {
    return foodCategoryInfo.map((foodCategory, index) => (
      <FoodCategoryButton
        key={index}
        {...foodCategory}
        onClickFunction={(item) => onClickFunction(item)}
        selectedCategory={selectedCategory}
        categoryName={foodCategory.categoryName}
      />
    ));
  } else {
    return <Loader />;
  }
};

export default FoodCategoryButtonList;
