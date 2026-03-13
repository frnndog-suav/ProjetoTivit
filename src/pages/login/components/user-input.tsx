import type { UseFormRegisterReturn } from "react-hook-form";

interface IProps {
  controller: UseFormRegisterReturn<"user">;
}

export function UserInput({ controller }: IProps) {
  return (
    <div>
      <label
        htmlFor="user-field"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Usuário
      </label>
      <input
        {...controller}
        id="user-field"
        type="text"
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        placeholder="Seu usuário"
      />
    </div>
  );
}
