import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const aviationstackConfig = {
  baseURL: 'http://api.aviationstack.com/v1',
  accessKey: process.env.AVIATIONSTACK_ACCESS_KEY,
  // For HTTPS access (available on all plans)
  useHTTPS: process.env.AVIATIONSTACK_USE_HTTPS === 'true' || false
};

// Create axios instance for Aviationstack API
const aviationstackAPI = axios.create({
  baseURL: aviationstackConfig.useHTTPS 
    ? 'https://api.aviationstack.com/v1' 
    : aviationstackConfig.baseURL,
  timeout: 10000,
  params: {
    access_key: aviationstackConfig.accessKey
  }
});

// Add response interceptor for error handling
aviationstackAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.data?.error) {
      console.error('Aviationstack API Error:', error.response.data.error);
    }
    return Promise.reject(error);
  }
);

export default aviationstackAPI;
export { aviationstackConfig }; 