import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "../requestHandler";

export type TProfileEditInfo = {
  id: number;
  description: string | null;
  interests: Array<{ id: number; name: string }>;
  images: Array<{ id: number; file: string }>;
  email_confirmed: boolean;
};

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: requestHandler,
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    getProfile: builder.query<TProfileEditInfo, string>({
      query: (userID) => `/persons/${userID}/profile_edit/`,
      providesTags: ["Profile"],
    }),
    addInterests: builder.mutation<
      void,
      { interest: string[]; userID: string }
    >({
      query: ({ interest, userID }) => ({
        url: `/person/${userID}/interests/`,
        method: "POST",
        body: { interests: interest },
      }),
      invalidatesTags: ["Profile"],
    }),
    addPhotos: builder.mutation<void, FormData>({
      query: (images) => ({
        url: `/images/`,
        method: "POST",
        body: images,
      }),
      invalidatesTags: ["Profile"],
    }),
    deletePhoto: builder.mutation<void, number>({
      query: (imageID) => ({
        url: `/images/${imageID}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["Profile"],
    }),
    updateDescription: builder.mutation<
      void,
      { description: string; userID: string }
    >({
      query: ({ description, userID }) => ({
        url: `/persons/${userID}/`,
        method: "PATCH",
        body: { description },
      }),
      invalidatesTags: ["Profile"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useAddInterestsMutation,
  useAddPhotosMutation,
  useDeletePhotoMutation,
  useUpdateDescriptionMutation,
} = profileApi;
