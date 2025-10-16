import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['X-Access-Token'] = token;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  response => response.data,
  error => {
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const api = {
  getFolders: () => apiClient.get('/folders'),

  getIcons: (folderId = 1) => apiClient.get(`/icons/${folderId}`),

  signIn: credentials => apiClient.post('/auth/sign-in', credentials),

  signUp: credentials => apiClient.post('/auth/sign-up', credentials)
};
