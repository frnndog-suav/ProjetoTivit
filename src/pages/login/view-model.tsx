import { useLogin } from "@features/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppNavigator } from "@routes/use-app-navigator";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  user: z.string().min(1, "O campo de usuário é obrigatório"),
  password: z.string().min(1, "O campo de senha é obrigatório"),
});

type TLoginFormData = z.infer<typeof loginSchema>;

export const useLoginPageViewModel = () => {
  const { execute: login } = useLogin();
  const { goToInitialPage } = useAppNavigator();
  const { register, handleSubmit } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const userInputFormController = register("user");
  const passwordInputFormController = register("password");

  async function submit(data: TLoginFormData) {
    console.log("Form Data:", data);

    const response = await login({
      password: data.password,
      username: data.user,
    });

    console.log("Login Response:", response);

    goToInitialPage();
  }

  return {
    userInputFormController,
    passwordInputFormController,
    onSubmit: handleSubmit(submit),
  };
};
