import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './BackToCatalogButton.scss';
const BackToCatalogButton = ({ categoryName }) => {
  return (
    <Link className='back-to-catalog-button' to={`/category/${categoryName}`}>
      <div className='back-to-catalog-button__arrow'></div>
      <div className='back-to-catalog-button__text'>Назад в каталог</div>
    </Link>
  );
};

BackToCatalogButton.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default BackToCatalogButton;
