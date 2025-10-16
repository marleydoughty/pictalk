import axios from 'axios';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

// Request interceptor to add auth token
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

// Response interceptor for error handling
apiClient.interceptors.response.use(
  response => response.data,
  error => {
    const message =
      error.response?.data?.message || error.message || 'An error occurred';
    return Promise.reject(new Error(message));
  }
);

export const api = {
  // Folders
  getFolders: () => apiClient.get('/folders'),

  // Icons
  getIcons: (folderId = 1) => apiClient.get(`/icons/${folderId}`),

  // Auth
  signIn: credentials => apiClient.post('/auth/sign-in', credentials),

  signUp: credentials => apiClient.post('/auth/sign-up', credentials)
};
