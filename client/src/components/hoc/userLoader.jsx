import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getDataStatus,
  getIsLoggedIn,
  loadCurrentUserData,
} from '../../store/users';
import Loader from '../common/loader/loader';
import { useDispatch, useSelector } from 'react-redux';

const UserLoader = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('in UserLoader UseEffect');
    if (isLoggedIn && !dataStatus) {
      console.log('Now wiil be try to loadCurrentUserdata');

      dispatch(loadCurrentUserData());
    }
  }, [isLoggedIn, dataStatus]);

  return children;
};

UserLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default UserLoader;
