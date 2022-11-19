import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";

import { API_HOST } from "@/constants";

import { getAuthFromStorage } from "@/utils/authStorage";
import { ReqWithPagination } from "@/types/pagination";

declare module "axios" {
  export interface AxiosRequestConfig {
    isAuthorization?: boolean;
  }
}

type BaseApiRequest<T> = AxiosRequestConfig & Partial<ReqWithPagination<T>>;
type BaseApiResponsePromise<T> = AxiosPromise<T>;
export type BaseApiResponse<T> = AxiosResponse<T>;

const request = axios.create();

const defaultHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

request.interceptors.request.use(
  /* eslint-disable no-param-reassign */
  async (config) => {
    // TODO: Вызывать прогресс

    // Url
    const startsWithSlash = config.url?.startsWith("/");
    const startsWithHttp = config.url?.startsWith("http");

    if (!startsWithHttp && !startsWithSlash) {
      config.url = `/${config.url}`;
    }

    if (!startsWithHttp && API_HOST) {
      config.url = API_HOST + config.url;
    }

    // Headers
    const extraHeaders: Record<string, string> = {};

    // Authorization
    if (config.isAuthorization) {
      const { token } = getAuthFromStorage();

      extraHeaders.Authorization = `Bearer ${token}`;
    }

    config.headers = {
      ...defaultHeaders,
      ...extraHeaders,
    };

    // Params
    const extraParams: Record<string, unknown> = {};

    config.params = {
      ...config.params,
      ...extraParams,
    };

    return config;
  },
  /* eslint-enable no-param-reassign */
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (response) => {
    // TODO: Останавливать прогресс
    return response;
  },
  async (error) => {
    // TODO: Останавливать прогресс
    // const status = error?.response.status;

    return Promise.reject(error);
  }
);

export const createRequest = <Req, Res>(config?: BaseApiRequest<Req>) => {
  return request({
    isAuthorization: true,
    ...config,
  }) as BaseApiResponsePromise<Res>;
};
