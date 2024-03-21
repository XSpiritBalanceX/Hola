import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "@axiosApi/axiosAPI";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

type TProfileInfo = {
  id: number;
  description: string | null;
  interests: Array<{ id: number; name: string }>;
  images: Array<{ id: number; file: string }>;
  email_confirmed: boolean;
};

interface IToken {
  exp: number;
}

const userID = localStorage.getItem("hola_user_id");

const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("hola_refresh_token");
  const result = await axios.post(`${BASE_URL}/auth/refresh/`, {
    refresh: refreshToken,
  });

  const decodeToken: IToken = jwtDecode(result.data.access);
  const tokenExpires = new Date().getTime() + decodeToken.exp * 1000;
  const newAccessToken = result.data.access;

  localStorage.setItem("hola_tokenExpires", tokenExpires.toString());
  return newAccessToken;
};

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    const currentToken = localStorage.getItem("hola_access_token");
    if (currentToken) {
      headers.set("authorization", `Bearer ${currentToken}`);
    }
  },
});

// Перехватчик запросов для обработки ошибок
const requestHandler = async (url: string, config: any, extraOptions: any) => {
  const response = await baseQuery(url, config, extraOptions);
  if (response.error?.status === 401) {
    try {
      const newAccessToken = await refreshAccessToken();
      localStorage.setItem("hola_access_token", newAccessToken);

      const updatedConfig = {
        ...config,
        headers: {
          ...config.headers,
          authorization: `Bearer ${newAccessToken}`,
        },
      };
      return baseQuery(url, updatedConfig, extraOptions);
    } catch (error) {
      throw error;
    }
  }
  return response;
};

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: requestHandler,
  endpoints: (builder) => ({
    getProfile: builder.query<TProfileInfo, void>({
      query: () => `/persons/${userID}/profile_edit/`,
    }),
  }),
});

export const { useGetProfileQuery } = profileApi;
