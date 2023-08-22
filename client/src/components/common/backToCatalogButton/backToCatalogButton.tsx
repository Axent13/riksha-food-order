import React from 'react';
import { Link } from 'react-router-dom';
import './backToCatalogButton.scss';

interface BackToCatalogButtonProps {
  categoryName: string;
}

const BackToCatalogButton = ({ categoryName }: BackToCatalogButtonProps) => {
  return (
    <Link className='back-to-catalog-button' to={`/category/${categoryName}`}>
      <div className='back-to-catalog-button__arrow'></div>
      <div className='back-to-catalog-button__text'>Назад в каталог</div>
    </Link>
  );
};

export default BackToCatalogButton;
