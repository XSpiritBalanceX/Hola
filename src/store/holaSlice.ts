import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MainState = {
  locale: string;
};

const languageCurrent = localStorage.getItem("hola_lang");

const initialState: MainState = {
  locale: languageCurrent
    ? languageCurrent
    : navigator.language === "ru"
    ? "ru"
    : "en",
};

const holaSlice = createSlice({
  name: "hola",
  initialState,
  reducers: {
    changeLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
      localStorage.setItem("hola_lang", action.payload);
    },
  },
});

export const { changeLocale } = holaSlice.actions;

export default holaSlice.reducer;
