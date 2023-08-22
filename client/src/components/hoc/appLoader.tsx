import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getProductsLoadingStatus,
  loadProductsList,
} from '../../store/products';
import { useSelector } from 'react-redux';
import Loader from '../common/loader/loader';
import { loadFeedbacksList } from '../../store/feedbacks';
import { useTypedDispatch } from 'components/hooks/reduxToolkitHooks';

interface AppLoaderProps {
  children: React.ReactNode;
}

const AppLoader = ({ children }: AppLoaderProps) => {
  const dispatch = useTypedDispatch();
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
