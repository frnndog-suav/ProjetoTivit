import { useAppNavigator } from "@routes/use-app-navigator";
import { useAuthenticationStoreToken } from "@stores/authentication";

export function useInitialPageViewModel() {
  const { goToUserPage, goToAdminPage } = useAppNavigator();
  const token = useAuthenticationStoreToken();
  const isUser = token?.sub === "user";
  const isAdmin = token?.sub === "admin";

  return {
    isUser,
    isAdmin,
    goToUserPage,
    goToAdminPage,
  };
}
