import { UIButton } from "@components/button";

interface IProps {
  show: boolean;
}

export function AdminArea({ show }: IProps) {
  if (!show) return null;

  return (
    <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div>
        <h2 className="text-xl font-bold text-blue-950">
          Bem-vindo, administrador!
        </h2>
        <p className="text-blue-800 mt-1">
          Acesse sua área exclusiva para administradores
        </p>
      </div>
      <UIButton
        label="Ir para tela do admin"
        onClick={() => console.log("Navegar para a tela do admin")}
      />
    </div>
  );
}
