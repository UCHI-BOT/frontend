import { GetTasksTopicsRes, GetTasksReq, GetTasksRes, CompleteSessionReq } from "@/services/api/tasks/types.ts";
import { apiClient } from "@/services/api/client.ts";
import { API_ENDPOINTS } from "@/services/api/endpoints.ts";

export const getTasks = async ({ token, ...body }: GetTasksReq): Promise<GetTasksRes> => {
  const { data } = await apiClient.post<GetTasksRes>(`${API_ENDPOINTS.SESSION}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getTasksTopics = async ({ token }: { token: string }): Promise<GetTasksTopicsRes> => {
  const { data } = await apiClient.get<GetTasksTopicsRes>(`${API_ENDPOINTS.GET_TOPICS}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const completeSession = async ({ token, ...body }: CompleteSessionReq) => {
  const { data } = await apiClient.delete(`${API_ENDPOINTS.SESSION}`, {
    data: body,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
