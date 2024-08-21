import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstances = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2e2d0679f48f48ed919bc1cd2e09e98f",
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = async (config: AxiosRequestConfig) => {
    const res = await axiosInstances.get<FetchResponse<T>>(
      this.endpoint,
      config
    );
    return res.data;
  };
}

export default APIClient;
