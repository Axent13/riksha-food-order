import React from 'react';
import PropTypes from 'prop-types';
import FoodCategoryButton from './foodCategoryButton';
import { foodCategoryInfo } from './foodCategoryInfo';
import Loader from '../loader/loader';

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
    return <Loader />;
  }
};

FoodCategoryButtonList.propTypes = {
  isInHeader: PropTypes.bool,
};

export default FoodCategoryButtonList;
