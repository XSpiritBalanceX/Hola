import { configureStore } from "@reduxjs/toolkit";
import holaSlice from "./holaSlice";

export const store = configureStore({
  reducer: {
    hola: holaSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
