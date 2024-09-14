import axios from 'axios';

const baseUrl = 'https://api.tryfrosti.com/';
export default axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'multipart/form-data',
  },
  withCredentials: true,
});
