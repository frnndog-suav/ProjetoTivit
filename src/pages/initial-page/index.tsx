import { useAuthenticationStoreToken } from "@stores/authentication";
import { InitialPageComposition } from "./components/_index";

export default function InitialPage() {
  const token = useAuthenticationStoreToken();
  const isUser = token?.sub === "user";
  const isAdmin = token?.sub === "admin";

  return (
    <InitialPageComposition.Container>
      <InitialPageComposition.Header />

      <InitialPageComposition.Content>
        <InitialPageComposition.UserArea show={isUser} />

        <InitialPageComposition.AdminArea show={isAdmin} />

        <InitialPageComposition.ErrorScenario show={!isUser && !isAdmin} />
      </InitialPageComposition.Content>
    </InitialPageComposition.Container>
  );
}
