import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

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

export const accountApi = createApi({
  reducerPath: "accountApi",
  baseQuery: requestHandler,
  tagTypes: ["Account"],
  endpoints: (builder) => ({
    getAccount: builder.query<TAccountInfo, string>({
      query: (userID) => `/persons/${userID}/account_settings/`,
      providesTags: ["Account"],
    }),
    updateAccount: builder.mutation<
      void,
      { info: TAccountInfo; userID: string }
    >({
      query: ({ info, userID }) => ({
        url: `/persons/${userID}/account_settings/`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["Account"],
    }),
    deleteAccount: builder.mutation<void, string>({
      query: (userID) => ({
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
