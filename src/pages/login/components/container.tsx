interface IProps {
  children: React.ReactNode;
}

export function Container({ children }: IProps) {
  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      {children}
    </div>
  );
}
