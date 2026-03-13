import type { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  register: UseFormRegisterReturn<"password">;
}

export function PasswordInput({ register }: IProps) {
  return (
    <div>
      <label
        htmlFor="password-field"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Senha
      </label>
      <input
        {...register}
        id="password-field"
        type="password"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        placeholder="••••••••"
      />
    </div>
  );
}
