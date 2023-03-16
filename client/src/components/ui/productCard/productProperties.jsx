import React from 'react';
import PropTypes from 'prop-types';
import './productProperties.scss';
import spicyImg from '../../../assets/spicy-icon.png';
import hotImg from '../../../assets/hot-icon.png';

const ProductProperties = ({ properties }) => {
  return (
    properties && (
      <div className='product-properties'>
        {properties.isSpicy && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={spicyImg}
              alt='Острое'
            />
            <p className='product-properties__text'>Острое</p>
          </div>
        )}
        {properties.isHotRoll && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={hotImg}
              alt='Горячий ролл'
            />
            <p className='product-properties__text'>Горячий ролл</p>
          </div>
        )}
      </div>
    )
  );
};

ProductProperties.propTypes = {
  properties: PropTypes.object,
};

export default ProductProperties;
