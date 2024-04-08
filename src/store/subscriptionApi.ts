import { createApi } from "@reduxjs/toolkit/query/react";
import { requestHandler } from "./requestHandler";

export type TPlanInformation = {
  id: number;
  type: string;
  price_per_month: string;
};

export const subscriptionApi = createApi({
  reducerPath: "subscriptionApi",
  baseQuery: requestHandler,
  tagTypes: ["Subscription"],
  endpoints: (builder) => ({
    getSubscriptions: builder.query<TPlanInformation[], void>({
      query: () => "/plans/",
      providesTags: ["Subscription"],
    }),
    getPlanByID: builder.query<TPlanInformation, string>({
      query: (id) => `/plans/${id}`,
    }),
    getUserPlan: builder.query<TPlanInformation, void>({
      query: () => "/persons/plan/",
    }),
  }),
});

export const {
  useGetSubscriptionsQuery,
  useGetPlanByIDQuery,
  useGetUserPlanQuery,
} = subscriptionApi;
