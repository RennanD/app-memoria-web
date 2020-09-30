import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app-memoria.tk',
  // baseURL: 'http://10.0.0.105:3333',
});

export default api;
