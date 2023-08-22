import { RootState } from './store';
import {
  Dispatch,
  PayloadAction,
  createAction,
  createSlice,
} from '@reduxjs/toolkit';
import feedbackService from '../services/feedback.service';
import isOutdated from '../utils/isOutdated';
import { Feedback } from 'types/models/feedback';

interface FeedbacksState {
  entities: Feedback[];
  isLoading: boolean;
  error: string;
  lastFetch: number;
}

const initialState: FeedbacksState = {
  entities: null,
  isLoading: true,
  error: null,
  lastFetch: null,
};

const feedbacksSlice = createSlice({
  name: 'feedbacks',
  initialState,
  reducers: {
    feedbacksRequested: (state) => {
      state.isLoading = true;
    },
    feedbacksReceived: (state, action: PayloadAction<Feedback[]>) => {
      state.entities = action.payload;
      state.lastFetch = Date.now();
      state.isLoading = false;
    },
    feedbacksRequestFailed: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    feedbackAdded: (state, action: PayloadAction<Feedback>) => {
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

export const loadFeedbacksList =
  () => async (dispatch: Dispatch, getState: () => RootState) => {
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

export const getFeedbacks = () => (state: RootState) =>
  state.feedbacks.entities;

export const getFeedbacksLoadingStatus = () => (state: RootState) =>
  state.feedbacks.isLoading;

export const addFeedback =
  (payload: Feedback) => async (dispatch: Dispatch) => {
    dispatch(addFeedbackRequested());
    try {
      const { content } = await feedbackService.addFeedback(payload);
      dispatch(feedbackAdded(content));
    } catch (error) {
      dispatch(feedbacksRequestFailed(error.message));
    }
  };

export default feedbacksReducer;
