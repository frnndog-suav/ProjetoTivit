import { UserPageComposition } from "./components/_index";
import type { useUserPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useUserPageViewModel> {}

export function UserPageView({ email, message, name, purchases }: IProps) {
  return (
    <UserPageComposition.Container>
      <UserPageComposition.Header name={name} email={email} message={message} />

      <UserPageComposition.List purchases={purchases} />
    </UserPageComposition.Container>
  );
}
