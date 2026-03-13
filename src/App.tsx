function App() {
  return (
    <div className="bg-gray-300 w-screen h-screen flex items-center justify-center">
      <div className="bg-white py-5 px-8 rounded-lg shadow-2xl w-full m-5 md:m-0 md:max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Login
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email-field"
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label
              htmlFor="password-field"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Senha
            </label>
            <input
              id="password-field"
              type="password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors shadow-md"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
