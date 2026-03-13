import LoginPage from "@/pages/login";
import { Route, Routes } from "react-router";
import { APP_PATHS } from "./app-paths";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={"*"} element={<div>página não existe</div>} />
      <Route path={"/"} element={<LoginPage />} />
      <Route path={APP_PATHS.Login} element={<LoginPage />} />
    </Routes>
  );
}
