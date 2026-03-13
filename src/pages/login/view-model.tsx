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
  const { goToInitialPage } = useAppNavigator();
  const { register, handleSubmit } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const userInputFormController = register("user");
  const passwordInputFormController = register("password");

  function submit(data: TLoginFormData) {
    console.log("Form Data:", data);
    goToInitialPage();
  }

  return {
    userInputFormController,
    passwordInputFormController,
    onSubmit: handleSubmit(submit),
  };
};
