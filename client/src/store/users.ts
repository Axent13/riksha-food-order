/* eslint-disable indent */
import {
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import userService from '../services/user.service';
import { generetaAuthError } from '../utils/generateAuthError';
import history from '../utils/history';
import { User } from 'types/models/user';
import { RootState } from './store';

export type AuthData = {
  userId: string;
};

interface UsersState {
  entities: User;
  isLoading: boolean;
  error: string;
  auth: AuthData;
  isLoggedIn: boolean;
  dataLoaded: boolean;
}

const initialState: UsersState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLoggedIn: true,
      dataLoaded: false,
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLoggedIn: false,
      dataLoaded: false,
    };

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userRequested: (state) => {
      state.isLoading = true;
    },
    userReceived: (state, action: PayloadAction<User>) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    userRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action: PayloadAction<AuthData>) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    userCreated: (state, action: PayloadAction<User>) => {
      state.entities = action.payload;
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userUpdateSuccessed: (state, action: PayloadAction<User>) => {
      state.entities = action.payload;
    },
    authRequested: (state) => {
      state.error = null;
    },
  },
});

const { reducer: usersReducer, actions } = usersSlice;
const {
  userRequested,
  userReceived,
  userRequestFailed,
  authRequestFailed,
  authRequestSuccess,
  userLoggedOut,
  userUpdateSuccessed,
} = actions;

const authRequested = createAction('users/authRequested');
const userUpdateFailed = createAction('users/userUpdateFailed');
const userUpdateRequested = createAction('users/userUpdateRequested');

export const login =
  (payload: { email: string; password: string }) =>
  async (dispatch: Dispatch) => {
    const { email, password } = payload;
    dispatch(authRequested());
    try {
      const data = await authService.login({ email, password });
      localStorageService.setTokens(data);
      dispatch(authRequestSuccess({ userId: data.userId }));
    } catch (error) {
      const { code, message } = error.response.data.error;
      if (code === 400) {
        const errorMessage = generetaAuthError(message);
        dispatch(authRequestFailed(errorMessage));
      } else {
        dispatch(authRequestFailed(error.message));
      }
    }
  };

export const signUp = (payload: User) => async (dispatch: Dispatch) => {
  dispatch(authRequested());
  try {
    const data = await authService.register(payload);
    localStorageService.setTokens(data);
    dispatch(authRequestSuccess({ userId: data.userId }));
    history.back();
  } catch (error) {
    dispatch(authRequestFailed(error.message));
  }
};

export const logOut = () => (dispatch: Dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
};

export const loadCurrentUserData = () => async (dispatch: Dispatch) => {
  dispatch(userRequested());
  try {
    const { content } = await userService.getCurrentUser();
    dispatch(userReceived(content));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const updateUser =
  (payload: { name: string }) => async (dispatch: Dispatch) => {
    dispatch(userUpdateRequested());
    try {
      const { content } = await userService.update(payload);
      dispatch(userUpdateSuccessed(content));
      history.back();
    } catch (error) {
      dispatch(userUpdateFailed(error.message));
    }
  };

export const getCurrentUserData = () => (state: RootState) =>
  state.users.entities;

export const getIsLoggedIn = () => (state: RootState) => state.users.isLoggedIn;
export const getDataStatus = () => (state: RootState) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state: RootState) =>
  state.users.isLoading;
export const getCurrentUserId = () => (state: RootState) =>
  state.users.auth?.userId;
export const getAuthErrors = () => (state: RootState) => state.users.error;
export default usersReducer;
