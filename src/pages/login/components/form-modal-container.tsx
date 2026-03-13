interface IProps {
  children: React.ReactNode;
  onSubmit: () => void;
}

export function FormModalContainer({ children, onSubmit }: IProps) {
  return (
    <div
      className="
    bg-white 
      py-5 
      px-8 
      rounded-lg 
      shadow-2xl 
      w-full 
      flex
      flex-col
      m-5 
      md:m-0 
      md:max-w-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Login
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col">
        {children}
      </form>
    </div>
  );
}
