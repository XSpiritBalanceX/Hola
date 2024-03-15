import { BASE_URL } from "@axiosApi/axiosAPI";
import axios from "axios";

interface IUserInformation {
  gender: string;
  name: string;
  date_of_birth: string;
  country: string;
  email: string;
  password: string;
}

interface IResponse {
  data: { detail?: string; id?: number };
}

export const signUp = async (data: IUserInformation) => {
  const response: IResponse = await axios.post(`${BASE_URL}/person/`, data);

  return response;
};
