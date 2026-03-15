import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useAuthenticationStoreToken } from "@stores/authentication";
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
  const token = useAuthenticationStoreToken();

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY],
    enabled: !!token && token.sub === "user",
    queryFn: async () => {
      const { data } = await api.get<IResponse, AxiosResponse<IResponse>>(
        ENDPOINTS.UserInfo,
      );

      return data;
    },
  });

  async function retry() {
    await refetch();
  }

  return { data, isError, isLoading, retry };
};

export { QUERY_KEY as USER_INFO_QUERY_KEY };
