import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@axiosApi/axiosAPI";
import { refreshAccessToken } from "@api/auth/refreshToken";
import {
  BaseQueryFn,
  FetchBaseQueryMeta,
  FetchBaseQueryError,
  FetchArgs,
} from "@reduxjs/toolkit/query";

const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  object,
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const currentToken = localStorage.getItem("hola_access_token");
    if (currentToken) {
      headers.set("authorization", `Bearer ${currentToken}`);
    }
  },
});

// Перехватчик запросов для обработки ошибок
export const requestHandler = async (
  url: string | FetchArgs,
  config: any,
  extraOptions: object
) => {
  const response = await baseQuery(url, config, extraOptions);
  if (response.error?.status === 401) {
    try {
      const newAccessToken = await refreshAccessToken();
      if (newAccessToken) {
        localStorage.setItem("hola_access_token", newAccessToken);

        const updatedConfig = {
          ...config,
          headers: {
            ...config.headers,
            authorization: `Bearer ${newAccessToken}`,
          },
        };
        return baseQuery(url, updatedConfig, extraOptions);
      }
    } catch (error) {
      throw error;
    }
  }
  return response;
};
