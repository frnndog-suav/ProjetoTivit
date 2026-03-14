import { useNavigate } from "react-router";
import { APP_PATHS } from "./app-paths";

export const useAppNavigator = () => {
  const navigate = useNavigate();

  function goToLoginPage() {
    navigate(APP_PATHS.Login);
  }

  function goToInitialPage() {
    navigate(APP_PATHS.InitialPage);
  }

  function goToUserPage() {
    navigate(APP_PATHS.User);
  }

  function goToAdminPage() {
    navigate(APP_PATHS.Admin);
  }

  return { goToInitialPage, goToLoginPage, goToUserPage, goToAdminPage };
};
