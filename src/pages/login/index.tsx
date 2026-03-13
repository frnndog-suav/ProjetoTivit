import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { LoginComposition } from "./components/_index";

const loginSchema = z.object({
  user: z.string().min(1, "O campo de usuário é obrigatório"),
  password: z.string().min(1, "O campo de senha é obrigatório"),
});

type TLoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const { register, handleSubmit } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  function submit(data: TLoginFormData) {
    console.log("Form Data:", data);
  }

  return (
    <LoginComposition.Container>
      <LoginComposition.FormModalContainer onSubmit={handleSubmit(submit)}>
        <LoginComposition.UserInput register={register("user")} />

        <LoginComposition.PasswordInput register={register("password")} />

        <LoginComposition.SubmitButton />
      </LoginComposition.FormModalContainer>
    </LoginComposition.Container>
  );
}
