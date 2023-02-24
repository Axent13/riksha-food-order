import React from 'react';
import PropTypes from 'prop-types';
import './productFeatures.scss';

const ProductFeature = ({ features }) => {
  return (
    features && (
      <div className='product-features'>
        {features.isTop && (
          <div className='product-features__feature product-features__top'>
            TOP
          </div>
        )}
        {features.isNew && (
          <div className='product-features__feature product-features__new'>
            NEW
          </div>
        )}
      </div>
    )
  );
};

ProductFeature.propTypes = {
  features: PropTypes.object,
};

export default ProductFeature;
