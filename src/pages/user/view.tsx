import { UserPageComposition } from "./components/_index";
import type { useUserPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useUserPageViewModel> {}

export function UserPageView({
  name,
  email,
  isError,
  message,
  purchases,
  isLoading,
  retry,
}: IProps) {
  return (
    <UserPageComposition.Container
      isError={isError}
      isLoading={isLoading}
      onRetry={retry}
    >
      <UserPageComposition.Header name={name} email={email} message={message} />

      <UserPageComposition.List purchases={purchases} />
    </UserPageComposition.Container>
  );
}
