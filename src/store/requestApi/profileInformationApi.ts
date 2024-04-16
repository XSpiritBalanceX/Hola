import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

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
    getProfileInformation: builder.query<TProfileInformation, string>({
      query: (personID) => `/persons/${personID}/`,
      providesTags: ["ProfileInformation"],
    }),
    uploadAvatar: builder.mutation<void, FormData>({
      query: (photo) => ({
        url: `/persons/${userID}/avatar/`,
        method: "PATCH",
        body: photo,
      }),
      invalidatesTags: ["ProfileInformation"],
    }),
    deleteAvatar: builder.mutation<void, void>({
      query: () => ({
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
