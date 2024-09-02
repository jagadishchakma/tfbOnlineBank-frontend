import axios from 'axios';
import { backend_link } from './utils';

const api = axios.create({
  baseURL: backend_link,
  headers: {
    'Content-Type': 'application/json',
  },
});

let authApi;
let uploadApi;

if (typeof window !== 'undefined') {
  // Client-side code
  authApi = axios.create({
    baseURL: backend_link,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });

  uploadApi = axios.create({
    baseURL: backend_link,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
}

export { authApi, uploadApi };
export default api;