export interface GetUserProps {
  id: number;
  token: string;
}

export interface UpdateUserProps {
  id: number;
  token: string;
  timezone: number;
  telegramUsername: string;
}
