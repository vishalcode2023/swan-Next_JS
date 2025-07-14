import axios from 'axios';

// Create axios instance with default configs
const api = axios.create({
  baseURL: 'https://api.clickngro.com/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for authentication and other headers
api.interceptors.request.use(
  (config) => {
    // Add any auth tokens or other headers here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle network errors
    if (error.message === 'Network Error') {
      console.error('Network Error: Unable to connect to the API server');
    }
    
    // Handle timeout errors
    if (error.code === 'ECONNABORTED') {
      console.error('Request timeout: The server took too long to respond');
    }
    
    // Handle HTTP errors
    if (error.response) {
      const { status, data } = error.response;
      console.error(`API Error (${status}):`, data);
    }
    
    return Promise.reject(error);
  }
);

export default api; 