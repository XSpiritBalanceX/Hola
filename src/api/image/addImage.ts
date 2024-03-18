import { BASE_URL } from "@axiosApi/axiosAPI";
import axios from "axios";

interface IResponse {
  data: { detail?: string };
}

export const addImage = async (images: FormData) => {
  const response: IResponse = await axios.post(`${BASE_URL}/images/`, images);

  return response;
};
