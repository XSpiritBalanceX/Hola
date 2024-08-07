import { UseFormSetValue } from "react-hook-form";

export interface IAccountInformation {
  name: string;
  email: string;
  date_of_birth: string;
  goal: number;
  location: { id: number; name: string };
  global_search: boolean;
  max_distance: number;
  min_age: number;
  max_age: number;
}

export interface IDates {
  day: string[];
  month: string[];
  year: string[];
}

export interface IDatePicker {
  date_of_birth: string;
  locale: string;
  setValue: UseFormSetValue<IAccountInformation>;
}

export interface IUserLocationProps {
  user_location: string;
  cbHandleOpenModalCountries: (name: string, isShow: boolean) => void;
}

export interface IAccountRagersProps {
  distance: number;
  global_search: boolean;
  min_age: number;
  max_age: number;
  setValue: UseFormSetValue<IAccountInformation>;
}
