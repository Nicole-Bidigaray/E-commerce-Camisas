# Ignite Shop

Ignite Shop é uma aplicação de e-commerce desenvolvida com Next.js e integrada com Stripe para processamento de pagamentos. 
Esta aplicação permite que os usuários visualizem produtos e realizem compras.

## Índice

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Stripe](https://stripe.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/ignite-shop.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd ignite-shop
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Configuração

1. Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis de ambiente:

  ```bash
  NEXT_URL=http://localhost:3000
  STRIPE_PUBLIC_KEY=pk_test_51Pib5nRsmSpNP7L3Ht4hEttn9hp2E0QboFqI9d1rFYB0bxIbfIWuOCnQlOyLsY4AYoxrHg9HaZEZwxpZ1vKO2axf00wlCRvnHy
  STRIPE_SECRET_KEY=sk_test_51Pib5nRsmSpNP7L3br2R7brr6jXPpj5HuuVWF4tmTdUdWL8cTxYoIfmE5UGufPcUXaVb0YJO4fhusxZGwGjmML2q00lC83OsbX
  ```

## Uso

Para iniciar o projeto em ambiente de desenvolvimento, utilize o seguinte comando:

  ```bash
  npm run dev
  ```
  
Isso iniciará o servidor de desenvolvimento em http://localhost:3000.

## Scripts Disponíveis

- npm run dev: Inicia o servidor de desenvolvimento.
- npm run build: Cria uma versão de produção da aplicação.
- npm run start: Inicia o servidor de produção.
- npm run lint: Executa o linter para verificar o código.

## Estrutura de Pastas

  ignite-shop/
  ├── public/
  │   └── ...
  ├── src/
  │   ├── components/
  │   ├── lib/
  │   ├── pages/
  │   │   ├── api/
  │   │   ├── _app.tsx
  │   │   ├── _document.tsx
  │   │   ├── index.tsx
  │   │   └── success.tsx
  │   ├── styles/
  │   │   ├── globals.css
  │   │   └── pages/
  │   └── ...
  ├── .env.local
  ├── .eslintrc.json
  ├── .gitignore
  ├── next.config.mjs
  ├── package.json
  └── README.md

## Contribuição

Se você quiser contribuir com este projeto, por favor, abra uma issue ou envie um pull request. Todas as contribuições são bem-vindas!

## Licença

### Explicação das Seções

- **Título e Descrição**: Fornece uma introdução rápida ao projeto.
- **Índice**: Facilita a navegação pelo documento.
- **Demo**: Link para uma versão demo do projeto.
- **Tecnologias Utilizadas**: Lista as principais tecnologias usadas no projeto.
- **Instalação**: Passos detalhados para clonar o repositório e instalar as dependências.
- **Configuração**: Instruções para configurar variáveis de ambiente necessárias para o projeto.
- **Uso**: Como iniciar o projeto em ambiente de desenvolvimento.
- **Scripts Disponíveis**: Descrição dos scripts npm disponíveis para uso.
- **Estrutura de Pastas**: Descrição da estrutura de pastas do projeto.
- **Contribuição**: Informações sobre como contribuir para o projeto.
- **Licença**: Informação sobre a licença do projeto.
