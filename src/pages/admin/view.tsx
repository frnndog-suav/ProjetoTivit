import { AdminPageComposition } from "./components/_index";
import type { useAdminPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useAdminPageViewModel> {}

export function AdminPageView({
  name,
  email,
  isError,
  message,
  reports,
  isLoading,
  retry,
}: IProps) {
  return (
    <AdminPageComposition.Container
      isError={isError}
      isLoading={isLoading}
      onRetry={retry}
    >
      <AdminPageComposition.Header
        name={name}
        email={email}
        message={message}
      />

      <AdminPageComposition.List reports={reports} />
    </AdminPageComposition.Container>
  );
}
