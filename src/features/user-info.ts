import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

const QUERY_KEY = "@tivit-user-info";

interface IPurchase {
  id: number;
  item: string;
  price: number;
}

interface IUserData {
  name: string;
  email: string;
  purchases: IPurchase[];
}

interface IResponse {
  message: string;
  data: IUserData;
}

export const useUserInfo = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: async () => {
      const { data } = await api.get<IResponse, AxiosResponse<IResponse>>(
        ENDPOINTS.UserInfo,
      );

      return data;
    },
  });

  return { data, isError, isLoading };
};
