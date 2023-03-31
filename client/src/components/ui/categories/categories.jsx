import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import FoodCategoryButtonList from '../../common/foodCategory/foodCategoryButtonList';
import ProductCard from '../productCard/productCard';
import { paginate } from '../../../utils/paginate';

import './categories.scss';
import { getProducts } from '../../../store/products';
import Pagination from '../../common/pagination/pagination';

const Categories = () => {
  const products = useSelector(getProducts());
  const [selectedCategory, setSelectedCategory] = useState('pizza');

  const handleClick = (item) => {
    setCurrentPage(1);
    setSelectedCategory(item);
  };

  const filteredProducts = products.filter((product) =>
    product.categories.includes(selectedCategory)
  );

  const filteredProductsCount = filteredProducts.length;
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevButtonClick = () => {
    return setCurrentPage((prevState) => prevState - 1);
  };

  const handleNextButtonClick = () => {
    return setCurrentPage((prevState) => prevState + 1);
  };

  const filteredProductsCrop = paginate(
    filteredProducts,
    currentPage,
    pageSize
  );

  return (
    <div className='categories'>
      <div className='categories__categories-buttons'>
        <FoodCategoryButtonList
          onClickFunction={handleClick}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className='categories__products'>
        {filteredProductsCrop.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='categoiries__pagination-and-catalog-link'>
        <div className='categories__pagination'>
          <Pagination
            itemsCount={filteredProductsCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onPrevButtonClick={handlePrevButtonClick}
            onNextButtonClick={handleNextButtonClick}
          />
        </div>
        <div className='categories__catalog-link'>
          {/* GoToCatalogComponent */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
