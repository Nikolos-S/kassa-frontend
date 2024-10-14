import { axiosInstance as request } from './request';
import routes from '../routes';

export const sessionOpen = async () => request.put(routes.open());
export const sessionClose = async () => request.put(routes.close());