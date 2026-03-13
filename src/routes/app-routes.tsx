import LoginPage from "@/pages/login";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import { APP_PATHS } from "./app-paths";
import { PrivateRoutes } from "./private-routes";

const InitialPageLazyLoading = lazy(() => import("@pages/initial-page"));

export function AppRoutes() {
  return (
    <Routes>
      <Route path={"*"} element={<div>página não existe</div>} />
      <Route path={"/"} element={<LoginPage />} />
      <Route path={APP_PATHS.Login} element={<LoginPage />} />

      <Route path={APP_PATHS.InitialPage} element={<PrivateRoutes />}>
        <Route
          index
          element={
            <Suspense
              fallback={
                <div className="bg-red-200 w-screen h-screen text-4xl flex items-center justify-center">
                  Carregando...
                </div>
              }
            >
              <InitialPageLazyLoading />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
