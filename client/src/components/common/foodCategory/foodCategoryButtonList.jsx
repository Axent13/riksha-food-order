import React from 'react';
import PropTypes from 'prop-types';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';

const FoodCategoryButtonList = ({ isInHeader }) => {
  if (foodCategoryInfo) {
    return foodCategoryInfo.map((foodCategory, index) => (
      <FoodCategoryButton
        key={index}
        {...foodCategory}
        isInHeader={isInHeader}
      />
    ));
  } else {
    return 'Loading...';
  }
};

FoodCategoryButtonList.propTypes = {
  isInHeader: PropTypes.bool,
};

export default FoodCategoryButtonList;
