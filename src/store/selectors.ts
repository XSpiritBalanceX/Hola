import { RootState } from ".";
import { TProfileEditInfo } from "./profileApi";
import { TAccountInfo } from "./accountApi";
import { TProfileInformation } from "./profileInformationApi";
import { TPlanInformation } from "./subscriptionApi";

export const localeSelect = (state: RootState) => state.hola.locale;

export const isLoginSelect = (state: RootState) => state.hola.isLogin;

export const profileEditSelect = (state: RootState) =>
  state.profileApi.queries["getProfile(undefined)"]?.data as TProfileEditInfo;

export const accountSelect = (state: RootState) =>
  state.accountApi.queries["getAccount(undefined)"]?.data as TAccountInfo;

export const profileInformationSelect = (state: RootState) =>
  state.profileInformationApi.queries["getProfileInformation(undefined)"]
    ?.data as TProfileInformation;

export const subscriptionSelect = (state: RootState) =>
  state.subscriptionApi.queries["getSubscriptions(undefined)"]
    ?.data as TPlanInformation[];
