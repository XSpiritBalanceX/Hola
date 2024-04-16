import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import holaSlice from "./holaSlice";
import { profileApi } from "./requestApi/profileApi";
import { accountApi } from "./requestApi/accountApi";
import { profileInformationApi } from "./requestApi/profileInformationApi";
import { subscriptionApi } from "./requestApi/subscriptionApi";

export const store = configureStore({
  reducer: {
    hola: holaSlice,
    [profileApi.reducerPath]: profileApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [profileInformationApi.reducerPath]: profileInformationApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      profileApi.middleware,
      accountApi.middleware,
      profileInformationApi.middleware,
      subscriptionApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
