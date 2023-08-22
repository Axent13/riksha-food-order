import { Feedback } from 'types/models/feedback';
import httpService from './http.service';

const feedbackEndpoint = 'feedback/';

const feedbackService = {
  get: async () => {
    const req = await httpService.get(feedbackEndpoint);
    return req.data;
  },
  addFeedback: async (payload: Feedback) => {
    const { data } = await httpService.post(feedbackEndpoint, payload);
    return data;
  },
};

export default feedbackService;
