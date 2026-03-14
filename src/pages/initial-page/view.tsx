import { InitialPageComposition } from "./components/_index";
import type { useInitialPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useInitialPageViewModel> {}

export function InitialPageView({ isAdmin, isUser }: IProps) {
  return (
    <InitialPageComposition.Container>
      <InitialPageComposition.Header />

      <InitialPageComposition.Content>
        <InitialPageComposition.UserArea show={isUser} />

        <InitialPageComposition.AdminArea show={isAdmin} />

        <InitialPageComposition.ErrorScenario show={!isUser && !isAdmin} />
      </InitialPageComposition.Content>
    </InitialPageComposition.Container>
  );
}
