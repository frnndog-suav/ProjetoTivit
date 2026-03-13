import { api } from "@server/axios";
import { ENDPOINTS } from "@server/endpoints";
import { useMutation } from "@tanstack/react-query";

interface IRequestBody {
  username: string;
  password: string;
}

export const useLogin = () => {
  const { mutateAsync, isError, isPending } = useMutation({
    mutationFn: async (requestBody: IRequestBody) => {
      const { data } = await api.post(
        ENDPOINTS.Token,
        {},
        {
          params: {
            username: requestBody.username,
            password: requestBody.password,
          },
        },
      );

      return data;
    },
  });

  return { execute: mutateAsync, isPending, isError };
};
