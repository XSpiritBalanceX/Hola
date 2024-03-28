import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import holaSlice from "./holaSlice";
import { profileEditApi } from "./profileEditApi";
import { accountApi } from "./accountApi";

export const store = configureStore({
  reducer: {
    hola: holaSlice,
    [profileEditApi.reducerPath]: profileEditApi.reducer,
    [accountApi.reducerPath]: accountApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(profileEditApi.middleware)
      .concat(accountApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
