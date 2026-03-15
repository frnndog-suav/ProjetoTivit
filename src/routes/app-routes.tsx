import { UILoadingScenario } from "@components/loading-scenario";
import { RouteError } from "@components/route-error";
import LoginPage from "@pages/login";
import { lazy, type ReactNode, Suspense } from "react";
import { Route, Routes } from "react-router";
import { APP_PATHS } from "./app-paths";
import { PrivateRoutes } from "./private-routes";

const InitialPage = lazy(() => import("@pages/initial-page"));
const UserPage = lazy(() => import("@pages/user"));
const AdminPage = lazy(() => import("@pages/admin"));

const withSuspense = (Component: ReactNode) => (
  <Suspense fallback={<UILoadingScenario show={true} />}>{Component}</Suspense>
);

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<RouteError />} />
      <Route path={APP_PATHS.Login} element={<LoginPage />} />

      <Route path={APP_PATHS.InitialPage} element={<PrivateRoutes />}>
        <Route index element={withSuspense(<InitialPage />)} />
        <Route path={APP_PATHS.User} element={withSuspense(<UserPage />)} />
        <Route path={APP_PATHS.Admin} element={withSuspense(<AdminPage />)} />
      </Route>
    </Routes>
  );
}
