import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import holaSlice from "./holaSlice";
import { profileApi } from "./profileApi";
import { accountApi } from "./accountApi";
import { profileInformationApi } from "./profileInformationApi";

export const store = configureStore({
  reducer: {
    hola: holaSlice,
    [profileApi.reducerPath]: profileApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
    [profileInformationApi.reducerPath]: profileInformationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      profileApi.middleware,
      accountApi.middleware,
      profileInformationApi.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
