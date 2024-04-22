import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

export interface IItemUserInList {
  id: number;
  name: string;
  age: number;
  description: null | string;
  similarities: number;
  interests: Array<{ id: number; name: string }>;
  images: Array<{ id: number; file: string }>;
}

export const searchingApi = createApi({
  reducerPath: "searchingApi",
  baseQuery: requestHandler,
  tagTypes: ["Search"],
  endpoints: (builder) => ({
    getUsers: builder.query<IItemUserInList[], string>({
      query: (goal_id) => ({
        url: "/persons/",
        method: "GET",
        params: {
          goal: goal_id,
        },
      }),
      providesTags: ["Search"],
    }),
  }),
});

export const { useGetUsersQuery } = searchingApi;
