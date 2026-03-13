import { LoginComposition } from "./components/_index";
import type { useLoginPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useLoginPageViewModel> {}

export function LoginPageView({
  disabled,
  userInputFormController,
  passwordInputFormController,
  onSubmit,
}: IProps) {
  return (
    <LoginComposition.Container>
      <LoginComposition.FormModalContainer onSubmit={onSubmit}>
        <LoginComposition.UserInput
          disabled={disabled}
          controller={userInputFormController}
        />

        <LoginComposition.PasswordInput
          disabled={disabled}
          controller={passwordInputFormController}
        />

        <LoginComposition.SubmitButton disabled={disabled} />
      </LoginComposition.FormModalContainer>
    </LoginComposition.Container>
  );
}
