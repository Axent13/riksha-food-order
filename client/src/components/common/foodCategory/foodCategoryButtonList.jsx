import React from 'react';
import PropTypes from 'prop-types';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';
import Loader from '../loader/loader';

const FoodCategoryButtonList = ({ onClickFunction, selectedCategory }) => {
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

FoodCategoryButtonList.propTypes = {
  onClickFunction: PropTypes.func,
  selectedCategory: PropTypes.string,
};

export default FoodCategoryButtonList;
