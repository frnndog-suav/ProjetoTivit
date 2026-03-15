import { useAdminInfo } from "@features/admin-info";
import { RoleGuardWrapper } from "@routes/role-guard-wrapper";

function RootPage() {
  const { data } = useAdminInfo();

  return (
    <div className="flex flex-col">
      <h1>AdminPage</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}

export default function AdminPage() {
  return (
    <RoleGuardWrapper allowedRoles={["admin"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
