import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './foodCategoryButton.scss';

const FoodCategoryButton = ({
  text,
  image,
  isInHeader,
  onClickFunction,
  selectedCategory,
  categoryName,
}) => {
  return (
    <button
      className={
        'food-category-button' +
        (isInHeader ? ' food-category-button_in-header' : '') +
        (selectedCategory === categoryName
          ? ' food-category-button_selected'
          : '')
      }
      onClick={() => {
        onClickFunction(categoryName);
      }}
    >
      <img src={image} alt={text} />
      <span
        className={
          'food-category-button__text' +
          (isInHeader ? ' food-category-button__text_in-header' : '')
        }
      >
        {text}
      </span>
    </button>
  );
};

FoodCategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isInHeader: PropTypes.bool,
  onClickFunction: PropTypes.func,
  selectedCategory: PropTypes.string,
  categoryName: PropTypes.string,
};

export default FoodCategoryButton;
