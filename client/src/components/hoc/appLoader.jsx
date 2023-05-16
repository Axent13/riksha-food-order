import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getProductsLoadingStatus,
  loadProductsList,
} from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../common/loader/loader';
import { loadFeedbacksList } from '../../store/feedbacks';

const AppLoader = ({ children }) => {
  const dispatch = useDispatch();
  const productsLoadingStatus = useSelector(getProductsLoadingStatus());

  useEffect(() => {
    dispatch(loadProductsList());
    dispatch(loadFeedbacksList());
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
