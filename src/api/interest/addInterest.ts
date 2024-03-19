import { axiosInstance } from "@axiosApi/axiosAPI";

interface IResponse {
  data: { detail?: string };
}

export const addInterest = async (data: Array<number>) => {
  const userID = localStorage.getItem("hola_user_id");
  const response: IResponse = await axiosInstance.post(
    `/person/${userID}/interests/`,
    { interests: data }
  );

  return response;
};
