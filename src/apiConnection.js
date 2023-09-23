import axios from 'axios';

const baseUrl = 'http://34.85.158.189/';
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-type': 'application/json',
  },
});

export default axiosInstance;
