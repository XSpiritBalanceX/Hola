import { RootState } from ".";

const allState = (state: RootState) => state.hola;

export const localeSelect = (state: RootState) => allState(state).locale;
