import React from 'react';
import PropTypes from 'prop-types';

const ProductProperty = ({ properties }) => {
  return (
    properties && (
      <div className='product-properties'>
        {properties.isHotRoll && (
          <div className='product-property__hot-roll'>Горячий ролл</div>
        )}
        {properties.isSpicy && (
          <div className='product-property__spicy'>Острое</div>
        )}
      </div>
    )
  );
};

ProductProperty.propTypes = {
  properties: PropTypes.object,
};

export default ProductProperty;
