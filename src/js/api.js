import axios from 'axios';

const api = axios.create({
  baseURL: 'https://tfbonlinebank-backend.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

let authApi;
let uploadApi;

if (typeof window !== 'undefined') {
  // Client-side code
  authApi = axios.create({
    baseURL: 'https://tfbonlinebank-backend.onrender.com/',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });

  uploadApi = axios.create({
    baseURL: 'https://tfbonlinebank-backend.onrender.com/',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Token ${localStorage.getItem('token')}`,
    },
  });
}

export { authApi, uploadApi };
export default api;