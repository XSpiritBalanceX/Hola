import { UseFormSetValue } from "react-hook-form";

export interface IAccountInformation {
  name: string;
  email: string;
  date_of_birth: string;
  location: string;
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
