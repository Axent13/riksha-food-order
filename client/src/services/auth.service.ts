import axios from 'axios';
import localStorageService from './localStorage.service';
import config from '../config.json';
import { User } from 'types/models/user';

const httpAuth = axios.create({
  baseURL: config.apiEndpoint + '/auth/',
  params: {
    key: process.env.REACT_APP_FIREBASE_KEY,
  },
});

const authService = {
  register: async (payload: User) => {
    const { data } = await httpAuth.post(`signUp`, payload);
    return data;
  },
  login: async ({ email, password }: { email: string; password: string }) => {
    const { data } = await httpAuth.post(`signInWithPassword`, {
      email,
      password,
      returnSecureToken: true,
    });
    return data;
  },
  refresh: async () => {
    const { data } = await httpAuth.post('token', {
      grant_type: 'refresh_token',
      refresh_token: localStorageService.getRefreshToken(),
    });
    return data;
  },
};
export default authService;
