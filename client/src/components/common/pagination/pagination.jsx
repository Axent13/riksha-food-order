import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './pagination.scss';

const Pagination = ({
  itemsCount,
  pageSize,
  onPageChange,
  currentPage,
  onPrevButtonClick,
  onNextButtonClick,
}) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);

  if (pagesCount === 1) return null;

  return (
    <nav>
      <ul className='pagination'>
        <li>
          <button
            className='pagination__arrow-button'
            onClick={() => {
              if (currentPage > 1) {
                onPrevButtonClick();
              }
            }}
          ></button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={
              'pagination__page-item ' +
              (page === currentPage ? 'pagination__page-item_active' : '')
            }
          >
            <button
              className={
                'pagination__page-button ' +
                (page === currentPage ? 'pagination__page-button_active' : '')
              }
              onClick={() => {
                onPageChange(page);
              }}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            className='pagination__arrow-button pagination__arrow-button_next'
            onClick={() => {
              if (currentPage < pagesCount) {
                onNextButtonClick();
              }
            }}
          ></button>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPrevButtonClick: PropTypes.func.isRequired,
  onNextButtonClick: PropTypes.func.isRequired,
};

export default Pagination;
