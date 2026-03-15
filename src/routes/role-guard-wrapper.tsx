import type { TUserType } from "@global/types/user-type";
import { useAuthenticationStoreToken } from "@stores/authentication";
import { Navigate, useLocation } from "react-router";
import { APP_PATHS } from "./app-paths";

type TProps = {
  allowedRoles: TUserType[];
  children: React.ReactNode;
};

export function RoleGuardWrapper(props: TProps) {
  const location = useLocation();
  const token = useAuthenticationStoreToken();

  if (!token) {
    return <Navigate to={APP_PATHS.Login} state={{ from: location }} replace />;
  }

  if (!props.allowedRoles.includes(token.sub)) {
    return <Navigate to={APP_PATHS.Error} replace />;
  }

  return props.children;
}
