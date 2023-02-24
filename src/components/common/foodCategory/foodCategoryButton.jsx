import React from 'react';
import PropTypes from 'prop-types';
import './foodCategoryButton.scss';

const FoodCategoryButton = ({ text, image }) => {
  return (
    <button className='food-category-button'>
      <img src={image} alt={text} />
      <span className='food-category-button__text'>{text}</span>
    </button>
  );
};

FoodCategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodCategoryButton;
