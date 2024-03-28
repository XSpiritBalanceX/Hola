import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TProfileInfo = {
  id: number;
  description: string | null;
  interests: Array<{ id: number; name: string }>;
  images: Array<{ id: number; file: string }>;
  email_confirmed: boolean;
};

type TInterest = { interests: string[] };

const userID = localStorage.getItem("hola_user_id");

export const profileEditApi = createApi({
  reducerPath: "profileEditApi",
  baseQuery: requestHandler,
  tagTypes: ["ProfileEdit"],
  endpoints: (builder) => ({
    getProfile: builder.query<TProfileInfo, void>({
      query: () => `/persons/${userID}/profile_edit/`,
      providesTags: ["ProfileEdit"],
    }),
    addInterests: builder.mutation<void, TInterest>({
      //@ts-ignore
      query: (interests) => ({
        url: `/person/${userID}/interests/`,
        method: "POST",
        body: interests,
      }),
      invalidatesTags: ["ProfileEdit"],
    }),
    addPhotos: builder.mutation<void, FormData>({
      //@ts-ignore
      query: (images) => ({
        url: `/images/`,
        method: "POST",
        body: images,
      }),
      invalidatesTags: ["ProfileEdit"],
    }),
    deletePhoto: builder.mutation<void, number>({
      //@ts-ignore
      query: (imageID) => ({
        url: `/images/${imageID}/`,
        method: "DELETE",
      }),
      invalidatesTags: ["ProfileEdit"],
    }),
    updateDescription: builder.mutation<void, string>({
      //@ts-ignore
      query: (description) => ({
        url: `/persons/${userID}/`,
        method: "PATCH",
        body: { description },
      }),
      invalidatesTags: ["ProfileEdit"],
    }),
  }),
});

export const {
  useGetProfileQuery,
  useAddInterestsMutation,
  useAddPhotosMutation,
  useDeletePhotoMutation,
  useUpdateDescriptionMutation,
} = profileEditApi;
