interface User {
  id: number;
  username: string;
  telegramId?: number;
  avatarUrl?: string;
  registrationDate: Date;
  settings: {
    notifications: boolean;
  };
}

interface UserStats {
  streak: {
    isActive: boolean;
    total: number;
  };
  tasks: {
    total: number;
    rightPercent: number;
  };
}

export { type User, type UserStats };
