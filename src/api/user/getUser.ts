import { axiosInstance } from "@axiosApi/axiosAPI";

export type TUserInfo = {
  name: string;
  avatar: string | null;
  age: number;
  complete: number;
};

type TDetail = {
  detail: string;
};

interface IResponse {
  data: TDetail | TUserInfo;
}

export const getUser = async () => {
  const userID = localStorage.getItem("hola_user_id");
  const response: IResponse = await axiosInstance.get(`/persons/${userID}/`);

  return response;
};
