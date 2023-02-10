import React from 'react';
import PropTypes from 'prop-types';

const ProductFeature = ({ features }) => {
  return (
    features && (
      <div className='product-features'>
        {features.isTop && <div className='product-feature__top'>TOP</div>}
        {features.isNew && <div className='product-feature__new'>NEW</div>}
      </div>
    )
  );
};

ProductFeature.propTypes = {
  features: PropTypes.object,
};

export default ProductFeature;
