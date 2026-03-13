interface IProps {
  disabled: boolean;
}

export function SubmitButton({ disabled }: IProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="
      mt-5
      bg-blue-600 
      hover:bg-blue-700 
      text-white 
      font-semibold 
      py-2 
      rounded-md 
      transition-colors 
      shadow-md
      cursor-pointer
      disabled:cursor-not-allowed
      disabled:opacity-50
      disabled:bg-gray-100
      disabled:text-gray-500
      "
    >
      Entrar
    </button>
  );
}
