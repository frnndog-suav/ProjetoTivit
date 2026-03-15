# 📜 Documentação do Projeto: Guia de Arquitetura e Configuração

> **Nota:** Este projeto utiliza a versão **22.15.0** do **NodeJS**.

## 🕶 Observações

Os endpoints apresentavam problemas de CORS. Foi feito uma configuração no Vite para contornar este problema e conseguir fazer a autenticação do usuário e obter as informações dos endpoints. As configurações podem ser encontradas no arquivo _vite.config.ts_ nas linhas 15-23. No arquivo _src\server\axios.ts_, o "baseURL" esta redirecionando para "/api/" onde é feito um redirect para a url https://api-onecloud.multicloud.tivit.com/fake.

## 🛠️ Como rodar o projeto

1.  **Clonar o repositório:** Obtenha o código em sua máquina.
2.  **Instalar dependências:** Abra o terminal na pasta do projeto e execute:

    ```Bash
    npm install
    ```

    _Isso baixará a pasta `node_modules` com todas as ferramentas necessárias._

3.  **Iniciar o servidor de desenvolvimento:** No terminal, execute:

    ```Bash
    npm run dev
    ```

4.  **Acessar o portal:** O terminal mostrará um link (`http://localhost:5173`). Abra-o no seu navegador.

## 🚀 O que foi feito e por quê?

### 1. Inicializando projeto com Vite

Criei a base do projeto utilizando o comando `npm create vite@latest`. O Vite é extremamente rápido porque utiliza _Native ESM_ para o desenvolvimento, o que significa que o código carrega instantaneamente no navegador.

### 2. Limpando Boilerplate

Removi arquivos desnecessários (como `App.css`, `index.css` original e logos de exemplo).

### 3. Instalando TailwindCSS

Adicionei o framework de utilitários CSS e configuramos o `tailwind.config.js`. O Tailwind permite estilizar componentes sem sair do arquivo HTML/JSX. Isso acelera o desenvolvimento e garante que o design seja consistente através de classes pré-definidas.

### 4. Configurando o Path Alias

Configurei o projeto para reconhecer caminhos curtos, como `@components/` em vez de `../../../components/`. À medida que o projeto cresce, os caminhos relativos tornam-se confusos. O _Path Alias_ deixa a importação de arquivos elegante e fácil de ler.

### 5. Instalando Biome JS

O Biome foi utilizado para cuidar da formatação e "linting" (análise de erros) do código. O Biome é uma ferramenta "tudo em um" extremamente veloz que substitui o ESLint e o Prettier. Ele garante que todos os desenvolvedores sigam o mesmo padrão de escrita.

### 6. Usando React Hook Form e Zod

O `react-hook-form` foi usado para gerenciar formulários e o `zod` para validar os dados. O React Hook Form melhora a performance evitando renderizações desnecessárias, enquanto o Zod garante que os dados inseridos pelo usuário sejam exatamente o que esperamos.

### 7. React Router Dom

Configurei o sistema de navegação entre diferentes páginas da aplicação.

### 8. Axios e React-Query (TanStack Query)

Usei Axios para as requisições HTTP e React-Query para gerenciar o estado dessas requisições (cache, carregamento, erro).

### 9. Zustand

Implementei um controle de estado global para salvar informações do Token de Autenticação. O Zustand é uma alternativa leve e poderosa ao Redux, permitindo gerenciar esse estado global de forma simples.
