import { RootState } from ".";
import { TProfileEditInfo } from "./requestApi/profileApi";
import { TAccountInfo } from "./requestApi/accountApi";
import { TProfileInformation } from "./requestApi/profileInformationApi";
import { TPlanInformation } from "./requestApi/subscriptionApi";

export const localeSelect = (state: RootState) => state.hola.locale;

export const isLoginSelect = (state: RootState) => state.hola.isLogin;

export const profileEditSelect = (state: RootState) =>
  (state.profileApi.queries[`getProfile(undefined)`]
    ?.data as TProfileEditInfo) ||
  (state.profileApi.queries[
    `getProfile("${localStorage.getItem("hola_user_id")}")`
  ]?.data as TProfileEditInfo);

export const accountSelect = (state: RootState) =>
  state.accountApi.queries[
    `getAccount("${localStorage.getItem("hola_user_id")}")`
  ]?.data as TAccountInfo;

export const profileInformationSelect = (state: RootState) =>
  state.profileInformationApi.queries[
    `getProfileInformation("${localStorage.getItem("hola_user_id")}")`
  ]?.data as TProfileInformation;

export const subscriptionSelect = (state: RootState) =>
  state.subscriptionApi.queries["getSubscriptions(undefined)"]
    ?.data as TPlanInformation[];
