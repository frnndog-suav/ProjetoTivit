const ROUTE = {
  InitialPage: "/app",
  Login: "/login",
  User: "/user",
  Admin: "/admin",
} as const;

export const APP_PATHS = {
  Login: ROUTE.Login,
  InitialPage: ROUTE.InitialPage,
  User: ROUTE.InitialPage + ROUTE.User,
  Admin: ROUTE.InitialPage + ROUTE.Admin,
} as const;
