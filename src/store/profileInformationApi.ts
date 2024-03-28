import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TProfileInformation = {
  name: string;
  avatar: string | null;
  age: number;
  complete: number;
};

const userID = localStorage.getItem("hola_user_id");

export const profileInformationApi = createApi({
  reducerPath: "profileInformationApi",
  baseQuery: requestHandler,
  tagTypes: ["ProfileInformation"],
  endpoints: (builder) => ({
    getProfileInformation: builder.query<TProfileInformation, void>({
      query: () => `/persons/${userID}/`,
      providesTags: ["ProfileInformation"],
    }),
  }),
});

export const { useGetProfileInformationQuery } = profileInformationApi;
