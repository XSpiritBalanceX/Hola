import { RootState } from ".";
import { TProfileEditInfo } from "./profileApi";
import { TAccountInfo } from "./accountApi";

export const localeSelect = (state: RootState) => state.hola.locale;

export const isLoginSelect = (state: RootState) => state.hola.isLogin;

export const profileEditSelect = (state: RootState) =>
  state.profileApi.queries["getProfile(undefined)"]?.data as TProfileEditInfo;

export const accountSelect = (state: RootState) =>
  state.accountApi.queries["getAccount(undefined)"]?.data as TAccountInfo;
