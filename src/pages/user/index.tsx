import { RoleGuardWrapper } from "@routes/role-guard-wrapper";
import { UserPageView } from "./view";
import { useUserPageViewModel } from "./view-model";

function RootPage() {
  const viewModel = useUserPageViewModel();

  return <UserPageView {...viewModel} />;
}

export default function UserPage() {
  return (
    <RoleGuardWrapper allowedRoles={["user"]}>
      <RootPage />
    </RoleGuardWrapper>
  );
}
