import { createAction, createSlice } from '@reduxjs/toolkit';
import feedbackService from '../services/feedback.service';
import isOutdated from '../utils/isOutdated';

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
    lastFetch: null,
  },
  reducers: {
    feedbacksRequested: (state) => {
      state.isLoading = true;
    },
    feedbacksReceived: (state, action) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    feedbacksRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    feedbackAdded: (state, action) => {
      state.entities.push(action.payload);
    },
  },
});

const { reducer: feedbacksReducer, actions } = feedbacksSlice;
const {
  feedbacksRequested,
  feedbacksReceived,
  feedbacksRequestFailed,
  feedbackAdded,
} = actions;

const addFeedbackRequested = createAction('feedbacks/addFeedbackRequested');

export const loadFeedbacksList = () => async (dispatch, getState) => {
  const { lastFetch } = getState().feedbacks;
  if (isOutdated(lastFetch)) {
    dispatch(feedbacksRequested());
    try {
      const { content } = await feedbackService.get();
      dispatch(feedbacksReceived(content));
    } catch (error) {
      dispatch(feedbacksRequestFailed(error.message));
    }
  }
};

export const getFeedbacks = () => (state) => state.feedbacks.entities;

export const getFeedbacksLoadingStatus = () => (state) =>
  state.feedbacks.isLoading;

export const addFeedback = (payload) => async (dispatch) => {
  dispatch(addFeedbackRequested());
  try {
    const { content } = await feedbackService.addFeedback(payload);
    dispatch(feedbackAdded(content));
  } catch (error) {
    dispatch(feedbacksRequestFailed(error.message));
  }
};

export default feedbacksReducer;
