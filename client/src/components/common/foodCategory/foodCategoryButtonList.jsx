import React from 'react';
import PropTypes from 'prop-types';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';
import Loader from '../loader/loader';

const FoodCategoryButtonList = ({
  isInHeader,
  onClickFunction,
  selectedCategory,
}) => {
  if (foodCategoryInfo) {
    return foodCategoryInfo.map((foodCategory, index) => (
      <FoodCategoryButton
        key={index}
        {...foodCategory}
        isInHeader={isInHeader}
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
  isInHeader: PropTypes.bool,
  onClickFunction: PropTypes.func,
  selectedCategory: PropTypes.string,
};

export default FoodCategoryButtonList;
