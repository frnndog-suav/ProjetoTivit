import { InitialPageComposition } from "./components/_index";
import type { useInitialPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useInitialPageViewModel> {}

export function InitialPageView({
  isUser,
  isAdmin,
  goToUserPage,
  goToAdminPage,
}: IProps) {
  return (
    <InitialPageComposition.Container>
      <InitialPageComposition.Header />

      <InitialPageComposition.Content>
        <InitialPageComposition.UserArea show={isUser} onClick={goToUserPage} />

        <InitialPageComposition.AdminArea
          show={isAdmin}
          onClick={goToAdminPage}
        />

        <InitialPageComposition.ErrorScenario show={!isUser && !isAdmin} />
      </InitialPageComposition.Content>
    </InitialPageComposition.Container>
  );
}
