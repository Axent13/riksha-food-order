import httpService from './http.service';

const feedbackEndpoint = 'feedback/';

const feedbackService = {
  get: async () => {
    const req = await httpService.get(feedbackEndpoint);
    return req.data;
  },
  addFeedback: async (payload) => {
    const { data } = await httpService.post(feedbackEndpoint, payload);
    return data;
  },
};

export default feedbackService;
