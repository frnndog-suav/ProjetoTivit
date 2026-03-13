import { useLogin } from "@features/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppNavigator } from "@routes/use-app-navigator";
import { useAuthenticationStoreActions } from "@stores/authentication";
import { useForm } from "react-hook-form";
import * as z from "zod";

const loginSchema = z.object({
  user: z.string().min(1, "O campo de usuário é obrigatório."),
  password: z.string().min(1, "O campo de senha é obrigatório."),
});

type TLoginFormData = z.infer<typeof loginSchema>;

export const useLoginPageViewModel = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<TLoginFormData>({
    resolver: zodResolver(loginSchema),
  });
  const { goToInitialPage } = useAppNavigator();
  const { execute: login, isPending } = useLogin();
  const { setToken } = useAuthenticationStoreActions();

  const userInputFormController = register("user");
  const passwordInputFormController = register("password");
  const userInputErrorMessage = errors.user?.message || null;
  const passwordInputErrorMessage = errors.password?.message || null;

  async function submit(data: TLoginFormData) {
    try {
      const { access_token } = await login({
        password: data.password,
        username: data.user,
      });

      setToken(access_token);

      goToInitialPage();
    } catch (error) {
      console.log("TOAST error", error);
    }
  }

  return {
    userInputErrorMessage,
    userInputFormController,
    passwordInputErrorMessage,
    passwordInputFormController,
    disabled: isPending || isSubmitting,
    onSubmit: handleSubmit(submit),
  };
};
