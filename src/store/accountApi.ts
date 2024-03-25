import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

type TAccountInfo = {};

const userID = localStorage.getItem("hola_user_id");

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: requestHandler,
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    getAccount: builder.query<TAccountInfo, void>({
      query: () => `/persons/${userID}/account_settings/`,
      providesTags: ["Account"],
    }),
  }),
});

export const { useGetAccountQuery } = accountApi;
