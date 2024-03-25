import { RootState } from ".";
import { TProfileInfo } from "./profileApi";

export const localeSelect = (state: RootState) => state.hola.locale;

export const isLoginSelect = (state: RootState) => state.hola.isLogin;

export const profileEditSelect = (state: RootState) =>
  state.profileApi.queries["getProfile(undefined)"]?.data as TProfileInfo;
