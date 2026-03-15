import { useLogin } from "@features/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppNavigator } from "@routes/use-app-navigator";
import { useAuthenticationStoreActions } from "@stores/authentication";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { loginSchema, type TLoginFormData } from "./schema";

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
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          toast("Credenciais inválidas.", {
            icon: "❌",
            removeDelay: 2000,
            position: "bottom-center",
          });
          return;
        }
      }

      toast("Erro inesperado. Tente novamente.", {
        icon: "⚠️",
        removeDelay: 2000,
        position: "bottom-center",
      });
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
