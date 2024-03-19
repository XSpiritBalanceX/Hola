import { axiosInstance } from "@axiosApi/axiosAPI";

interface IUserInfo {
  email: string;
  password: string;
}

interface IResponse {
  data: {
    access: string;
    refresh: string;
  };
}

export const signIn = async (data: IUserInfo) => {
  const response: IResponse = await axiosInstance.post("/auth/login/", data);

  return response;
};
