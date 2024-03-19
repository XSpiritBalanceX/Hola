import { RootState } from ".";

const allState = (state: RootState) => state.hola;

export const localeSelect = (state: RootState) => allState(state).locale;

export const isLoginSelect = (state: RootState) => allState(state).isLogin;
