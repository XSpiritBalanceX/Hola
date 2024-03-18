import { axiosInstance } from "@axiosApi/axiosAPI";

interface IResponse {
  data: { detail?: string };
}

export const addImage = async (images: FormData) => {
  const response: IResponse = await axiosInstance.post(`/images/`, images);

  return response;
};
