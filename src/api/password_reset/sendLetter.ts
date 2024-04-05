import { axiosInstance } from "@axiosApi/axiosAPI";

interface IResponse {
  data: { detail?: string };
}

export const sendLetter = async (email: string) => {
  const response: IResponse = await axiosInstance.post(`/password/otp/reset/`, {
    interests: email,
  });

  return response;
};
