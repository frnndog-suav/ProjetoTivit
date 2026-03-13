import { useNavigate } from "react-router";
import { APP_PATHS } from "./app-paths";

export const useAppNavigator = () => {
  const navigate = useNavigate();

  function goToInitialPage() {
    navigate(APP_PATHS.InitialPage);
  }

  return { goToInitialPage };
};
