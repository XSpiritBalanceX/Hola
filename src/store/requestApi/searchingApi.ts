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

interface IResponseMatch {
  id?: number;
  from_person?: number;
  to_person?: number;
  match?: boolean;
  person?: number;
}

export const searchingApi = createApi({
  reducerPath: "searchingApi",
  baseQuery: requestHandler,
  tagTypes: ["Search", "UserProfile"],
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
    getUserById: builder.query<IItemUserInList, string>({
      query: (user_id) => `/persons/${user_id}/profile/`,
      providesTags: ["UserProfile"],
    }),
    swipeToRight: builder.mutation<
      IResponseMatch,
      { fromPerson: string; toPerson: number }
    >({
      query: ({ fromPerson, toPerson }) => ({
        url: "/matches/",
        method: "POST",
        body: { from_person: Number(fromPerson), to_person: toPerson },
      }),
    }),
    ignorePerson: builder.mutation<
      any,
      { person_id: string; ignored_id: number }
    >({
      query: ({ person_id, ignored_id }) => ({
        url: "/ignored/",
        method: "POST",
        body: { person: Number(person_id), ignored_person: ignored_id },
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useSwipeToRightMutation,
  useIgnorePersonMutation,
} = searchingApi;
