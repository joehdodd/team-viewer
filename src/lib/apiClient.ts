import axios, { AxiosResponse } from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const axiosConfig = {
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json; charset=utf-8",
    "Content-Type": "application/json",
  },
};

const APIInstance = axios.create(axiosConfig);

export default function apiClient(endpoint: string, options: object) {
  return APIInstance.request({
    url: endpoint,
    ...options,
  }).then((res: AxiosResponse) => res);
};
