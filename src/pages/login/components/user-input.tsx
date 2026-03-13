import type { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  disabled: boolean;
  errorMessage: string | null;
  controller: UseFormRegisterReturn<"user">;
}

export function UserInput({ errorMessage, disabled, controller }: IProps) {
  return (
    <div className="h-25">
      <label
        htmlFor="user-field"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Usuário
      </label>
      <input
        {...controller}
        required
        type="text"
        id="user-field"
        disabled={disabled}
        placeholder="Digite seu usuário"
        className="
        w-full 
        px-4 
        py-2 
        border 
        rounded-md 
        focus:ring-2 
        outline-none 
        transition-all
        cursor-pointer
        disabled:cursor-not-allowed
        disabled:opacity-50
        disabled:bg-gray-100
        disabled:text-gray-500
        border-gray-300 
        focus:ring-blue-500 
        "
      />
      {errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
    </div>
  );
}
