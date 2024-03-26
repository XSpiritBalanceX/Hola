import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TAccountInfo = {
  name: string;
  email: string;
  date_of_birth: string;
  location: number | null;
  global_search: boolean;
  max_distance: number;
  min_age: number | null;
  max_age: number | null;
};

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
    updateAccount: builder.mutation<void, TAccountInfo>({
      //@ts-ignore
      query: (information) => ({
        url: `/persons/${userID}/account_settings/`,
        method: "PATCH",
        body: information,
      }),
      invalidatesTags: ["Account"],
    }),
  }),
});

export const { useGetAccountQuery, useUpdateAccountMutation } = accountApi;
