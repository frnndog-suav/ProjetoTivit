interface IProps {
  children: React.ReactNode;
}

export function Content({ children }: IProps) {
  return <div className="space-y-6">{children}</div>;
}
