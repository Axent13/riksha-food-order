import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getDataStatus, loadCurrentUserData } from '../../store/users';
import Loader from '../common/loader/loader';
import { useDispatch, useSelector } from 'react-redux';

const UserLoader = ({ children }) => {
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataStatus) dispatch(loadCurrentUserData());
  }, []);

  if (!dataStatus) return <Loader />;

  return children;
};

UserLoader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
export default UserLoader;
