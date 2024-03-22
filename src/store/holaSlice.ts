import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  LOGIN_KEY,
  REFRESH_TOKEN_KEY,
  TOKEN_EXPIRES_KEY,
  TOKEN_KEY,
} from "@axiosApi/axiosAPI";

type MainState = {
  locale: string;
  isLogin: boolean;
};

const languageCurrent = localStorage.getItem("hola_lang");
const tokens =
  localStorage.getItem("hola_access_token") &&
  localStorage.getItem("hola_refresh_token");

const initialState: MainState = {
  locale: languageCurrent
    ? languageCurrent
    : navigator.language === "ru"
    ? "ru"
    : "en",
  isLogin: tokens ? true : false,
};

const holaSlice = createSlice({
  name: "hola",
  initialState,
  reducers: {
    changeLocale(state, action: PayloadAction<string>) {
      state.locale = action.payload;
      localStorage.setItem("hola_lang", action.payload);
    },
    loginUser(
      state,
      action: PayloadAction<{
        isLogin: boolean;
        token: string;
        refreshToken: string;
        expiresIn: number;
        email: string;
        user_id: string;
      }>
    ) {
      state.isLogin = action.payload.isLogin;
      if (action.payload.isLogin) {
        localStorage.setItem(TOKEN_KEY, action.payload.token);
        localStorage.setItem(REFRESH_TOKEN_KEY, action.payload.refreshToken);
        localStorage.setItem(
          TOKEN_EXPIRES_KEY,
          String(action.payload.expiresIn)
        );
        localStorage.setItem(LOGIN_KEY, action.payload.email);
        localStorage.setItem("hola_user_id", action.payload.user_id);
      } else {
        localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);
        localStorage.removeItem(TOKEN_EXPIRES_KEY);
        localStorage.removeItem(LOGIN_KEY);
        localStorage.removeItem("hola_user_id");
      }
    },
  },
});

export const { changeLocale, loginUser } = holaSlice.actions;

export default holaSlice.reducer;
