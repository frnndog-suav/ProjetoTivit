interface IProps {
  show: boolean;
}

export function ErrorScenario({ show }: IProps) {
  if (!show) return null;

  return (
    <div className="text-center py-10">
      <p className="text-gray-500 italic">
        Nenhum perfil de acesso detectado. Por favor, faça login novamente.
      </p>
    </div>
  );
}
