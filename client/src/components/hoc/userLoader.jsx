import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  getDataStatus,
  getIsLoggedIn,
  loadCurrentUserData,
} from '../../store/users';
import { useDispatch, useSelector } from 'react-redux';

const UserLoader = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn());
  const dataStatus = useSelector(getDataStatus());
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn && !dataStatus) {
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
