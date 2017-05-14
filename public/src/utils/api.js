import axios from 'axios';
import { USER_URL_GET, CHANNEL_URL_GET } from '../utils/constants';

const api = {};

api.getUser = () => {
  return axios.get(USER_URL_GET);
};

api.getChannel = () => {
  return axios.get(CHANNEL_URL_GET);
};

export default api;
