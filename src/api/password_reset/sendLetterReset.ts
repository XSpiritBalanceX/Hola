import { axiosInstance } from "@axiosApi/axiosAPI";

interface IResponse {
  data: { detail?: string };
}

export const sendLetterReset = async (email: string) => {
  const response: IResponse = await axiosInstance.post(`/password/otp/reset/`, {
    email: email,
  });

  return response;
};
