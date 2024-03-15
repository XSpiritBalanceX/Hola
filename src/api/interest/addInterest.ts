import { BASE_URL } from "@axiosApi/axiosAPI";
import axios from "axios";

interface IResponse {
  data: { detail?: string };
}

export const addInterest = async (data: Array<number>) => {
  const userID = localStorage.getItem("hola_user_id");
  const response: IResponse = await axios.post(
    `${BASE_URL}/person/${userID}/interests/`,
    { interests: data }
  );

  return response;
};
