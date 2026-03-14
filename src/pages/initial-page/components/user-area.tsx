import { UIButton } from "@components/button";

interface IProps {
  show: boolean;
  onClick: () => void;
}

export function UserArea({ show, onClick }: IProps) {
  if (!show) return null;

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h2 className="text-xl font-bold text-blue-950">Bem-vindo, usuário!</h2>
        <p className="text-blue-800 mt-1">
          Acesse sua área exclusiva para usuários
        </p>
      </div>
      <UIButton label="Ir para tela do usuário" onClick={onClick} />
    </div>
  );
}
