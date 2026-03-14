import { UIButton } from "@components/button";
import { useAuthenticationStoreToken } from "@stores/authentication";

export default function InitialPage() {
  const token = useAuthenticationStoreToken();
  const isUser = token?.sub === "user";
  const isAdmin = token?.sub === "admin";

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl p-8 rounded-2xl shadow-xl">
        <div className="pb-6 border-b border-gray-200 mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Página Inicial
          </h1>
          <p className="mt-2 text-gray-600">
            Painel de controle de acesso ao sistema
          </p>
        </div>

        <div className="space-y-6">
          {isUser && (
            <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-blue-950">
                  Bem-vindo, usuário!
                </h2>
                <p className="text-blue-800 mt-1">
                  Acesse sua área exclusiva para usuários
                </p>
              </div>
              <UIButton
                label="Ir para tela do usuário"
                onClick={() => console.log("Navegar para a tela do usuário")}
              />
            </div>
          )}

          {isAdmin && (
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-purple-950">
                  Bem-vindo, administrador!
                </h2>
                <p className="text-purple-800 mt-1">
                  Acesse o painel exclusivo para administradores
                </p>
              </div>
              <UIButton
                label="Ir para tela do admin"
                onClick={() => console.log("Navegar para a tela do admin")}
              />
            </div>
          )}

          {!isUser && !isAdmin && (
            <div className="text-center py-10">
              <p className="text-gray-500 italic">
                Nenhum perfil de acesso detectado. Por favor, faça login
                novamente.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
