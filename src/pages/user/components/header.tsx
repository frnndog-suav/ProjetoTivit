interface IProps {
  message: string;
  name: string;
  email: string;
}

export function Header({ message, name, email }: IProps) {
  return (
    <div className="pb-6 border-b border-gray-200 mb-8">
      <h1 className="text-3xl font-extrabold text-gray-900">{message}</h1>
      <p className="mt-2 text-gray-600">{`${name}, ${email}`}</p>
    </div>
  );
}
