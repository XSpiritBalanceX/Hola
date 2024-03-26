import { UseFormSetValue } from "react-hook-form";

type TCountry = {
  id: number;
  name: string;
};

export interface ISignUpInfo {
  gender: "man" | "woman";
  name: string;
  date_of_birth: string;
  country: TCountry;
  email: string;
  password: string;
  confirm_password: string;
}

export interface IListCountriesProps {
  user_country: string;
  cbHandleHideCountryList: () => void;
  setValue: UseFormSetValue<ISignUpInfo>;
}
