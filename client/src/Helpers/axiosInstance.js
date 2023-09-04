import axios from 'axios';

const BASE_URL = 'https://localhost:5001/api/v2';

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;

export default axiosInstance;