import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../store/products';
import ProductCard from '../productCard/productCard';
import './category.scss';
import { paginate } from '../../../utils/paginate';
import Pagination from '../../common/pagination/pagination';

const Category = ({ categoryName }) => {
  const products = useSelector(getProducts());

  const filteredProducts = products.filter((product) =>
    product.categories.includes(categoryName)
  );

  const filteredProductsCount = filteredProducts.length;
  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

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
    <div className='category'>
      <div className='category__products'>
        {filteredProductsCrop.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className='category__pagination'>
        <Pagination
          itemsCount={filteredProductsCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          onPrevButtonClick={handlePrevButtonClick}
          onNextButtonClick={handleNextButtonClick}
        />
      </div>
    </div>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string,
};

export default Category;
