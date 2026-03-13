/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <exhaustive deps> */

import { useAuthenticationStoreActions } from "@stores/authentication";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { SESSION_TOKEN } from "src/global/constants";
import { useAppNavigator } from "./use-app-navigator";

export function PrivateRoutes() {
  const { goToLoginPage } = useAppNavigator();
  const accessToken = localStorage.getItem(SESSION_TOKEN);
  const { setToken, clear } = useAuthenticationStoreActions();

  useEffect(() => {
    if (!accessToken) {
      clear();
      goToLoginPage();
    } else {
      setToken(accessToken);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return <Outlet />;
}
