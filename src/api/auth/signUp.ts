import { axiosInstance } from "@axiosApi/axiosAPI";

interface IUserInformation {
  gender: string;
  name: string;
  date_of_birth: string;
  country: string;
  email: string;
  password: string;
}

interface IResponse {
  data: {};
}

export const signUp = async (data: IUserInformation) => {
  const response: IResponse = await axiosInstance.post("/person/", data);

  return response;
};
