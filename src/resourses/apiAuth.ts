import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
  timeout: 20000,
});

// export const authToken = async (username, password, ws) => axiosInstance.get(`/api/auth/token?username=${username}&password=${password}&ws=${ws}`);

// export const authTokenRefresh = async (refreshToken) => axiosInstance.get('/api/auth/token/refresh', { params: { refreshToken } });
export const getWSAndRole = async (access) => axiosInstance.get('/api/me', { headers: { Authorization: `Bearer ${access}` } });