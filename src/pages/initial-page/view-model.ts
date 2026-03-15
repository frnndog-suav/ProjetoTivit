import { USER_INFO_QUERY_KEY } from "@features/user-info";
import { SESSION_TOKEN } from "@global/constants";
import { useAppNavigator } from "@routes/use-app-navigator";
import {
  useAuthenticationStoreActions,
  useAuthenticationStoreToken,
} from "@stores/authentication";
import { useQueryClient } from "@tanstack/react-query";

export function useInitialPageViewModel() {
  const queryClient = useQueryClient();
  const token = useAuthenticationStoreToken();
  const { clear } = useAuthenticationStoreActions();
  const { goToUserPage, goToAdminPage, goToLoginPage } = useAppNavigator();

  const isUser = token?.sub === "user";
  const isAdmin = token?.sub === "admin";

  function logout() {
    localStorage.removeItem(SESSION_TOKEN);
    clear();
    queryClient.invalidateQueries({
      exact: false,
      refetchType: "all",
      queryKey: [USER_INFO_QUERY_KEY],
    });
    goToLoginPage();
  }

  return {
    isUser,
    isAdmin,
    logout,
    goToUserPage,
    goToAdminPage,
  };
}
