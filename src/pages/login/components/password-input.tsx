import type { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  disabled: boolean;
  errorMessage: string | null;
  controller: UseFormRegisterReturn<"password">;
}

export function PasswordInput({ errorMessage, disabled, controller }: IProps) {
  return (
    <div className="h-25">
      <label
        htmlFor="password-field"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Senha
      </label>
      <input
        {...controller}
        id="password-field"
        type="password"
        required
        disabled={disabled}
        className="
        w-full 
        px-4 
        py-2 
        border 
        border-gray-300 
        rounded-md 
        focus:ring-2 
        focus:ring-blue-500 
        outline-none 
        transition-all
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:bg-gray-100
        disabled:text-gray-500"
        placeholder="Digite sua senha"
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}
