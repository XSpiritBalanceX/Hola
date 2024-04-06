import { axiosInstance } from "@axiosApi/axiosAPI";

interface IUserInformation {
  gender: string;
  name: string;
  date_of_birth: string;
  location: number;
  email: string;
  password: string;
}

interface IResponse {
  data: { detail?: string; id?: number };
}

export const signUp = async (data: IUserInformation) => {
  const response: IResponse = await axiosInstance.post("/person/", data);

  return response;
};
