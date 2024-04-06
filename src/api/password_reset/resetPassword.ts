import { axiosInstance } from "@axiosApi/axiosAPI";

interface IResponse {
  data: {};
}

export const resetPassword = async (data: {
  current_password: string;
  new_password: string;
  code: string;
}) => {
  const response: IResponse = await axiosInstance.post(
    `/password/otp/reset/verify/`,
    data
  );

  return response;
};
