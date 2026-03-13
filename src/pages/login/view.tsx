import { Toaster } from "react-hot-toast";
import { LoginComposition } from "./components/_index";
import type { useLoginPageViewModel } from "./view-model";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IProps extends ReturnType<typeof useLoginPageViewModel> {}

export function LoginPageView({
  disabled,
  userInputErrorMessage,
  userInputFormController,
  passwordInputErrorMessage,
  passwordInputFormController,
  onSubmit,
}: IProps) {
  return (
    <>
      <LoginComposition.Container>
        <LoginComposition.FormModalContainer onSubmit={onSubmit}>
          <LoginComposition.UserInput
            disabled={disabled}
            errorMessage={userInputErrorMessage}
            controller={userInputFormController}
          />

          <LoginComposition.PasswordInput
            disabled={disabled}
            errorMessage={passwordInputErrorMessage}
            controller={passwordInputFormController}
          />

          <LoginComposition.SubmitButton disabled={disabled} />
        </LoginComposition.FormModalContainer>
      </LoginComposition.Container>
      <Toaster />
    </>
  );
}
