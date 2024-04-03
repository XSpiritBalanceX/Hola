import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TPlanInformation = {
  id: number;
  type: string;
  price_per_month: string;
};

const userID = localStorage.getItem("hola_user_id");

export const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: requestHandler,
  tagTypes: ["Subscription"],
  endpoints: (builder) => ({
    getSubscriptions: builder.query<TPlanInformation[], void>({
      query: () => "/plans/",
      providesTags: ["Subscription"],
    }),
  }),
});

export const { useGetSubscriptionsQuery } = subscriptionApi;
