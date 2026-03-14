/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <exhaustive deps> */

import { useAuthenticationStoreActions } from "@stores/authentication";
import { useEffect } from "react";
import { Outlet } from "react-router";
import { SESSION_TOKEN } from "src/global/constants";
import { decodeUserToken } from "src/global/decode-user-token";
import { useAppNavigator } from "./use-app-navigator";

export function PrivateRoutes() {
  const { goToLoginPage } = useAppNavigator();
  const { setToken } = useAuthenticationStoreActions();

  useEffect(() => {
    const accessToken = localStorage.getItem(SESSION_TOKEN);

    if (accessToken) {
      const decodedToken = decodeUserToken(accessToken);

      if (!decodedToken) {
        goToLoginPage();
      }

      setToken(accessToken);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Outlet />;
}
