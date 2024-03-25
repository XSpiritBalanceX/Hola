import axios from "axios";
import { BASE_URL } from "@axiosApi/axiosAPI";
import { jwtDecode } from "jwt-decode";

interface IToken {
  exp: number;
}

export const refreshAccessToken = async (): Promise<string> => {
  const refreshToken = localStorage.getItem("hola_refresh_token");
  const result = await axios.post(`${BASE_URL}/auth/refresh/`, {
    refresh: refreshToken,
  });

  const decodeToken: IToken = jwtDecode(result.data.access);
  const newAccessToken = result.data.access;

  localStorage.setItem("hola_tokenExpires", decodeToken.exp.toString());
  return newAccessToken;
};
