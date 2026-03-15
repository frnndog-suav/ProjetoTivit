import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useAuthenticationStoreToken } from "@stores/authentication";
import { useQuery } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

const QUERY_KEY = "@tivit-admin-info";

interface IReport {
  id: number;
  title: string;
  status: string;
}

interface IAdminData {
  name: string;
  email: string;
  reports: IReport[];
}

interface IResponse {
  message: string;
  data: IAdminData;
}

export const useAdminInfo = () => {
  const token = useAuthenticationStoreToken();

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: [QUERY_KEY],
    enabled: !!token && token.sub === "admin",
    queryFn: async () => {
      const { data } = await api.get<IResponse, AxiosResponse<IResponse>>(
        ENDPOINTS.AdminInfo,
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
