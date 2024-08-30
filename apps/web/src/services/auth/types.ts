import { CancelToken } from "axios";

export interface CheckUsernameReq {
  username: string;
  cancelToken?: CancelToken;
}

export interface AuthTelegramMiniAppReq {
  query: string;
  username?: string;
  avatarUrl?: string;
}
export interface AuthTelegramMiniAppRes {
  token: string;
  user: {
    id: number;
  };
}
