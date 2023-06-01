import httpService from './http.service';

const messageEndpoint = 'message/';

const messageService = {
  sendMessage: async (payload) => {
    const { data } = await httpService.post(messageEndpoint, payload);
    return data;
  },
};

export default messageService;
