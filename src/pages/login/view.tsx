import { LoginComposition } from "./components/_index";
import type { useLoginPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useLoginPageViewModel> {}

export function LoginPageView({
  onSubmit,
  passwordInputFormController,
  userInputFormController,
}: IProps) {
  return (
    <LoginComposition.Container>
      <LoginComposition.FormModalContainer onSubmit={onSubmit}>
        <LoginComposition.UserInput controller={userInputFormController} />

        <LoginComposition.PasswordInput
          controller={passwordInputFormController}
        />

        <LoginComposition.SubmitButton />
      </LoginComposition.FormModalContainer>
    </LoginComposition.Container>
  );
}
