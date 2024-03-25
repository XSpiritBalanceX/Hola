import axios, { AxiosInstance, AxiosResponse } from "axios";
import { jwtDecode } from "jwt-decode";

interface IToken {
  exp: number;
}

export const BASE_URL = "http://212.193.62.231:8000/api/v1";
export const HOST = "212.193.62.231";
export const TOKEN_KEY = "hola_access_token";
export const REFRESH_TOKEN_KEY = "hola_refresh_token";
export const TOKEN_EXPIRES_KEY = "hola_tokenExpires";
export const LOGIN_KEY = "hola_login";

class AxiosAPI {
  //@ts-ignore
  private axiosInstance: AxiosInstance;

  logout: () => void = () => {
    console.error("empty");
  };
  setItem: (key: string, value: any) => void = () => {
    console.error("empty");
  };
  public getItem: (key: string) => any = () => {
    console.error("empty");
  };

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: BASE_URL,
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        console.error(error);
        if (error.response?.status === 401 && !error.config._retry) {
          error.config._retry = true;
          try {
            /* const newToken = await this.fetchToken();
            this.setItem(TOKEN_KEY, newToken); */
            /* this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
            error.config.headers.Authorization = `Bearer ${newToken}`;
            return this.axiosInstance(error.config); */
            await this.fetchToken();
            const newToken = axiosAPI.getItem(TOKEN_KEY);
            if (newToken) {
              this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${newToken}`;
              error.config.headers.Authorization = `Bearer ${newToken}`;
              return this.axiosInstance(error.config);
            } else {
              this.logout();
              return Promise.reject(error);
            }
          } catch (refreshError) {
            this.logout();
            return Promise.reject(refreshError);
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setLogout(logout: () => void) {
    this.logout = logout;
  }

  setSetItem(setItem: (key: string, value: any) => void) {
    this.setItem = setItem;
  }

  setGetItem(getItem: (key: string) => any) {
    this.getItem = getItem;
  }

  async fetchToken() {
    const refreshToken = this.getItem(REFRESH_TOKEN_KEY);
    if (!refreshToken) throw Error("some err");

    const result = await axios.post(`${BASE_URL}/auth/refresh/`, {
      refresh: refreshToken,
    });

    const decodeToken: IToken = jwtDecode(result.data.access);
    const tokenExpires = decodeToken.exp;

    this.setItem(TOKEN_KEY, result.data.access);
    this.setItem(TOKEN_EXPIRES_KEY, tokenExpires.toString());
  }

  getAxiosInstance() {
    return this.axiosInstance;
  }
}

export const axiosAPI = new AxiosAPI();

export const axiosInstance = axiosAPI.getAxiosInstance();

axiosInstance.interceptors.request.use(
  async function (config) {
    return new Promise(async (resolve) => {
      try {
        const token = axiosAPI.getItem(TOKEN_KEY);
        const expTime = Number(axiosAPI.getItem(TOKEN_EXPIRES_KEY) ?? "0") ?? 0;
        const curTime = Math.floor(Date.now() / 1000);
        const threeMinutes = 3 * 60;
        if (token && expTime && expTime - curTime <= threeMinutes) {
          await axiosAPI.fetchToken();
        }
        const updToken = axiosAPI.getItem(TOKEN_KEY);
        if (updToken) {
          // @ts-ignore
          config.headers = {
            ...config.headers,
            authorization: `Bearer ${updToken}`,
          };
        }
        resolve(config);
      } catch (err) {
        console.log("axiosInstance.interceptors.request.use", err);
        axiosAPI.logout();
        resolve(config);
      }
    });
  },
  function (error) {
    return Promise.reject(error);
  }
);
