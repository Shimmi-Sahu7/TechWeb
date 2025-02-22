import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000', // The backend URL
    timeout: 10000
});

export default axiosInstance;
