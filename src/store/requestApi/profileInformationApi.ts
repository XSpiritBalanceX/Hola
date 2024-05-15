import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

export type TProfileInformation = {
  name: string;
  avatar: string | null;
  age: number;
  complete: number;
};

export const profileInformationApi = createApi({
  reducerPath: "profileInformationApi",
  baseQuery: requestHandler,
  tagTypes: ["ProfileInformation"],
  endpoints: (builder) => ({
    getProfileInformation: builder.query<TProfileInformation, string>({
      query: (personID) => `/persons/${personID}/`,
      providesTags: ["ProfileInformation"],
    }),
    uploadAvatar: builder.mutation<void, { photo: FormData; userID: string }>({
      query: ({ photo, userID }) => ({
        url: `/persons/${userID}/avatar/`,
        method: "PATCH",
        body: photo,
      }),
      invalidatesTags: ["ProfileInformation"],
    }),
    deleteAvatar: builder.mutation<void, string>({
      query: (userID) => ({
        url: `/persons/${userID}/avatar/`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileInformation"],
    }),
  }),
});

export const {
  useGetProfileInformationQuery,
  useUploadAvatarMutation,
  useDeleteAvatarMutation,
} = profileInformationApi;
