import { useAuthenticationStoreToken } from "@stores/authentication";

export function useInitialPageViewModel() {
  const token = useAuthenticationStoreToken();
  const isUser = token?.sub === "user";
  const isAdmin = token?.sub === "admin";

  return {
    isUser,
    isAdmin,
  };
}
