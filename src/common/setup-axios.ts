import type { AxiosError, AxiosInstance } from 'axios';

export default function setupAxios(axios: AxiosInstance) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

  axios.interceptors.request.use(
    (config) => {
      // TODO: set Access Token
      return config;
    },
    (err: AxiosError) => {
      // TODO: handle request error
      return Promise.reject(err);
    },
  );
}
