import { useUserInfo } from "@features/user-info";
import { RoleGuardWrapper } from "@routes/role-guard-wrapper";
import { UserPageComposition } from "./components/_index";

function RootPage() {
  const { data } = useUserInfo();

  const purchases = data?.data.purchases ?? [];
  const name = data?.data.name ?? "Nome indisponível";
  const email = data?.data.email ?? "Email indisponível";
  const message = data?.message ?? "Mensagem indisponível";

  return (
    <UserPageComposition.Container>
      <UserPageComposition.Header name={name} email={email} message={message} />

      <UserPageComposition.List purchases={purchases} />
    </UserPageComposition.Container>
  );
}

export default function UserPage() {
  return (
    <RoleGuardWrapper allowedRoles={["user"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
