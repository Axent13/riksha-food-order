import React from 'react';
import PropTypes from 'prop-types';

const FoodCategoryButton = ({ text, image }) => {
  return (
    <button>
      <img src={image} alt={text} />
      {text}
    </button>
  );
};

FoodCategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodCategoryButton;
