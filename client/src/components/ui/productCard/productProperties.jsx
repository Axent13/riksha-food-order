import React from 'react';
import PropTypes from 'prop-types';
import './productProperties.scss';
import spicyImg from '../../../assets/spicy-icon.png';
import bakedImg from '../../../assets/baked-icon.png';
import tempuraImg from '../../../assets/tempura-icon.png';
import brandedImg from '../../../assets/branded-icon.png';
import grillImg from '../../../assets/grill-icon.png';

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
        {properties.isBaked && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={bakedImg}
              alt='Запеченный ролл'
            />
            <p className='product-properties__text'>Запеченный ролл</p>
          </div>
        )}
        {properties.isTempura && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={tempuraImg}
              alt='Темпура'
            />
            <p className='product-properties__text'>Темпура</p>
          </div>
        )}
        {properties.isBranded && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={brandedImg}
              alt='Фирменный'
            />
            <p className='product-properties__text'>Фирменный</p>
          </div>
        )}
        {properties.isGrill && (
          <div className='product-properties__property'>
            <img
              className='product-properties__icon'
              src={grillImg}
              alt='Гриль'
            />
            <p className='product-properties__text'>Гриль</p>
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
