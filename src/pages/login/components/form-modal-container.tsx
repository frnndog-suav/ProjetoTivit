interface IProps {
  children: React.ReactNode;
}

export function FormModalContainer({ children }: IProps) {
  return (
    <div className="bg-white py-5 px-8 rounded-lg shadow-2xl w-full m-5 md:m-0 md:max-w-md">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Login
      </h2>

      <form className="flex flex-col gap-4">{children}</form>
    </div>
  );
}
