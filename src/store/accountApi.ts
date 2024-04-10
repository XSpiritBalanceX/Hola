import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TAccountInfo = {
  name: string;
  email: string;
  date_of_birth: string;
  goal: number;
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
    deleteAccount: builder.mutation<void, void>({
      //@ts-ignore
      query: () => ({
        url: `/persons/${userID}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useUpdateAccountMutation,
  useDeleteAccountMutation,
} = accountApi;
