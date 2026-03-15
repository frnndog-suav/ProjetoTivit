import * as z from "zod";

export const loginSchema = z.object({
  user: z.string().min(1, "O campo de usuário é obrigatório."),
  password: z.string().min(1, "O campo de senha é obrigatório."),
});

export type TLoginFormData = z.infer<typeof loginSchema>;