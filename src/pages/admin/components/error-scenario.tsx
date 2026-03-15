import { UIButton } from "@components/button";

interface IProps {
  show: boolean;
  onRetry: () => Promise<void>;
}

export function ErrorScenario({ show, onRetry }: IProps) {
  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center animate-in slide-in-from-top-4 duration-500">
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        Ops! Algo deu errado
      </h3>
      <p className="text-slate-500 max-w-xs mb-6">
        Não conseguimos carregar as informações necessárias no momento.
      </p>

      <UIButton label="Tentar novamente" onClick={onRetry} />
    </div>
  );
}
