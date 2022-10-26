import React from 'react';
import PropTypes from 'prop-types';

const FoodCategoryButton = ({ text, iconUrl }) => {
  console.log(iconUrl);
  return (
    <button>
      <img src={iconUrl} alt={text} />
      {text}
    </button>
  );
};

FoodCategoryButton.propTypes = {
  text: PropTypes.string.isRequired,
  iconUrl: PropTypes.string.isRequired,
};

export default FoodCategoryButton;
