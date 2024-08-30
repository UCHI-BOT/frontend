import axios, { AxiosError } from "axios";
import { ERROR_CODES } from "@/services/api/errors.ts";
import { logout } from "@/services/auth";

const apiClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/${import.meta.env.VITE_API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    const error: AxiosError = err;
    const code = error.response?.status;

    if (code) {
      switch (code) {
        case ERROR_CODES.ACCESS_TOKEN_INVALID:
          await logout();
      }
    }

    return Promise.reject(err);
  },
);

export { apiClient };
