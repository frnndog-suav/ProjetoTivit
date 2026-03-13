import { LoginComposition } from "./components/_index";

export default function LoginPage() {
  return (
    <LoginComposition.Container>
      <LoginComposition.FormModalContainer>
        <LoginComposition.UserInput />

        <LoginComposition.PasswordInput />

        <LoginComposition.SubmitButton />
      </LoginComposition.FormModalContainer>
    </LoginComposition.Container>
  );
}
