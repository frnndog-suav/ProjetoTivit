interface IProps {
  show: boolean;
}

export function LoadingScenario({ show }: IProps) {
  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-300">
      <p className="text-slate-500 font-medium tracking-wide">Carregando...</p>
    </div>
  );
}
