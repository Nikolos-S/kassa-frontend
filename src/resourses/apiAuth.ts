import axios from 'axios';
import routes from '../routes';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
  timeout: 20000,
});

export const authTokenRefresh = async (refreshToken: string) => axiosInstance.get('/api/auth/token/refresh', { params: { refreshToken } });
export const getWSAndRole = async (access: string) => axiosInstance.get(routes.auth(), { headers: { Authorization: `Bearer ${access}` } });
