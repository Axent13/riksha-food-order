import { useEffect } from 'react';
import {
  getDataStatus,
  getIsLoggedIn,
  loadCurrentUserData,
} from '../../store/users';
import {
  useTypedDispatch,
  useTypedSelector,
} from 'components/hooks/reduxToolkitHooks';

interface UserLoaderProps {
  children: React.ReactNode;
}

const UserLoader = ({ children }: UserLoaderProps) => {
  const isLoggedIn = useTypedSelector(getIsLoggedIn());
  const dataStatus = useTypedSelector(getDataStatus());
  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (isLoggedIn && !dataStatus) {
      dispatch(loadCurrentUserData());
    }
  }, [isLoggedIn, dataStatus]);

  return children;
};

export default UserLoader;
