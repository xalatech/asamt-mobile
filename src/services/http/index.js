import axios from 'axios';
import TokenStorage from '@services/storage/token';

const baseURL = 'https://asamt-api.azurewebsites.net/api';

const http = axios.create({
  withCredentials: true,
  baseURL,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use(async (request) => {
  const token = await TokenStorage.get();
  const newRequest = { ...request };
  if (token) {
    newRequest.headers.Authorization = `Bearer ${token}`;
  }
  return newRequest;
}, error => Promise.reject(error));

export default http;
