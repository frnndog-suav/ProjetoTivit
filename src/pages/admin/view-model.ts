import { useAdminInfo } from "@features/admin-info";

export const useAdminPageViewModel = () => {
  const { data, isError, isLoading, retry } = useAdminInfo();

  const reports = data?.data.reports ?? [];
  const name = data?.data.name ?? "Nome indisponível";
  const email = data?.data.email ?? "Email indisponível";
  const message = data?.message ?? "Mensagem indisponível";

  return {
    name,
    email,
    isError,
    message,
    reports,
    isLoading,
    retry,
  };
};
