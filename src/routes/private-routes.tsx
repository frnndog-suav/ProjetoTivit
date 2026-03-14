import { useEffect } from "react";
import { Outlet } from "react-router";
import { SESSION_TOKEN } from "src/global/constants";
import { decodeUserToken } from "src/global/decode-user-token";

export function PrivateRoutes() {
  useEffect(() => {
    const accessToken = localStorage.getItem(SESSION_TOKEN);

    if (accessToken) {
      const response = decodeUserToken(accessToken);
      console.log("response", response);
    }
  }, []);

  return <Outlet />;
}
