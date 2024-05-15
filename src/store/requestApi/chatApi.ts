import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: requestHandler,
  tagTypes: ["Chat"],
  endpoints: (builder) => ({
    getChats: builder.query<any, void>({
      query: () => "/chats/",
      providesTags: ["Chat"],
    }),
  }),
});

export const { useGetChatsQuery } = chatApi;
