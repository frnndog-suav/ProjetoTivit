import { useUserInfo } from "@features/user-info";

export const useUserPageViewModel = () => {
  const { data } = useUserInfo();

  const purchases = data?.data.purchases ?? [];
  const name = data?.data.name ?? "Nome indisponível";
  const email = data?.data.email ?? "Email indisponível";
  const message = data?.message ?? "Mensagem indisponível";

  return {
    name,
    email,
    message,
    purchases,
  };
};
