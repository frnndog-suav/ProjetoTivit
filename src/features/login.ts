import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useMutation } from "@tanstack/react-query";
import type { AxiosResponse } from "axios";

interface IRequestBody {
  username: string;
  password: string;
}

interface IResponse {
  access_token: string;
}

export const useLogin = () => {
  const { mutateAsync, isError, isPending, isSuccess } = useMutation({
    mutationFn: async (requestBody: IRequestBody) => {
      const { data } = await api.post<IResponse, AxiosResponse<IResponse>>(
        ENDPOINTS.Token,
        {},
        {
          params: {
            username: requestBody.username,
            password: requestBody.password,
          } satisfies IRequestBody,
        },
      );

      return data;
    },
  });

  return { execute: mutateAsync, isSuccess, isPending, isError };
};
