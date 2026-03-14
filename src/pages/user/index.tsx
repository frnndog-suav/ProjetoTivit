import { RoleGuardWrapper } from "@routes/role-guard-wrapper";

function RootPage() {
  return <>UserPage</>;
}

export default function UserPage() {
  return (
    <RoleGuardWrapper allowedRoles={["user"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
