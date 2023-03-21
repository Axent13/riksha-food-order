import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getProductsLoadingStatus,
  loadProductsList,
} from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../common/loader/loader';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());

  useEffect(() => {
    dispatch(loadProductsList());
  }, []);

  if (productsLoadingStatus) {
    return <Loader isWholeHeight={true} />;
  }
  return children;
};

AppLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default AppLoader;
