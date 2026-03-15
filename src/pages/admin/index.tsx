import { RoleGuardWrapper } from "@routes/role-guard-wrapper";
import { AdminPageView } from "./view";
import { useAdminPageViewModel } from "./view-model";

function RootPage() {
  const viewModel = useAdminPageViewModel();

  return <AdminPageView {...viewModel} />;
}

export default function AdminPage() {
  return (
    <RoleGuardWrapper allowedRoles={["admin"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
