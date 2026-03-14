import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

const QUERY_KEY = "@tivit-health-check";

interface IResponse {
  status: string;
  message: string;
}

export const useUserInfo = () => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.get<IResponse, AxiosResponse<IResponse>>(
        ENDPOINTS.UserInfo,
      );

      return data;
    },
  });

  return { data };
};
