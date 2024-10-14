import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from "axios";
import { authTokenRefresh } from "./apiAuth";

interface ExtendedAxiosRequestConfig extends InternalAxiosRequestConfig {
  isRetry?: boolean;
}

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_REACT_APP_BASE_URL}`,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const { accessToken } = JSON.parse(sessionStorage.getItem('auth_data') || '{}');
    if (accessToken && config.headers) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;

  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (err: AxiosError): Promise<AxiosResponse | never> => {
    const originalRequest = err.config as ExtendedAxiosRequestConfig;
 if (err.response && err.response.status === 401 && !originalRequest.isRetry) {
  const authData = JSON.parse(sessionStorage.getItem('auth_data') || '{}') || {};
      try {
        let error;
        if (!authData.refreshToken) {
          error = 'Авторизация не найдена';
          return Promise.reject(error);
        }
        const response = await authTokenRefresh(authData.refreshToken);
        authData.accessToken = response.data.accessToken;
        authData.refreshToken = response.data.refreshToken;
        sessionStorage.setItem('auth_data', JSON.stringify(authData));

        originalRequest.isRetry = true;
        return axiosInstance(originalRequest);
      } catch (e) {
        console.error(e);
        return Promise.reject(new Error("ERR_REFRESH"));
      }
    } else if (err.isAxiosError && err.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Сервер отвечает слишком долго. Запрос отменен'));
    } else if (err.response && err.response.status === 403) {
      return Promise.reject(new Error('Для вызова данного метода недостаточно прав'));
    }
 return Promise.reject(new Error(err.response?.data as string)?.message ?? 'Непредвиденная ошибка сервера');
  }
);

export default axiosInstance;


export { axiosInstance };