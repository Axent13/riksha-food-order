/* eslint-disable indent */
import { createAction, createSlice } from '@reduxjs/toolkit';
import authService from '../services/auth.service';
import localStorageService from '../services/localStorage.service';
import userService from '../services/user.service';
import { generetaAuthError } from '../utils/generateAuthError';
import history from '../utils/history';

const initialState = localStorageService.getAccessToken()
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
    userReceived: (state, action) => {
      state.entities = action.payload;
      state.dataLoaded = true;
      state.isLoading = false;
    },
    userRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload;
      state.isLoggedIn = true;
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload;
    },
    userCreated: (state, action) => {
      state.entities.push(action.payload);
    },
    userLoggedOut: (state) => {
      state.entities = null;
      state.isLoggedIn = false;
      state.auth = null;
      state.dataLoaded = false;
    },
    userUpdateSuccessed: (state, action) => {
      state.entities[
        state.entities.findIndex((u) => u._id === action.payload._id)
      ] = action.payload;
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

export const login = (payload) => async (dispatch) => {
  console.log('payload in login', payload);
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

export const signUp = (payload) => async (dispatch) => {
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

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData();
  dispatch(userLoggedOut());
  history.push('/');
};

export const loadCurrentUserData = () => async (dispatch) => {
  dispatch(userRequested());
  try {
    const { content } = await userService.getCurrentUser();
    dispatch(userReceived(content));
  } catch (error) {
    dispatch(userRequestFailed(error.message));
  }
};

export const updateUser = (payload) => async (dispatch) => {
  dispatch(userUpdateRequested());
  try {
    const { content } = await userService.update(payload);
    dispatch(userUpdateSuccessed(content));
    history.push(`/users/${content._id}`);
  } catch (error) {
    dispatch(userUpdateFailed(error.message));
  }
};

export const getCurrentUserData = () => (state) => state.users.entities;

export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => u._id === userId);
  }
};

export const getIsLoggedIn = () => (state) => state.users.isLoggedIn;
export const getDataStatus = () => (state) => state.users.dataLoaded;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUserId = () => (state) => state.users.auth?.userId;
export const getAuthErrors = () => (state) => state.users.error;
export default usersReducer;
