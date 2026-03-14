import { RoleGuardWrapper } from "@routes/role-guard-wrapper";

function RootPage() {
  return <>AdminPage</>;
}

export default function AdminPage() {
  return (
    <RoleGuardWrapper allowedRoles={["admin"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
