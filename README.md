# Ignite Shop

Ignite Shop é uma aplicação de e-commerce desenvolvida com Next.js e integrada com Stripe para processamento de pagamentos. 
Esta aplicação permite que os usuários visualizem produtos e realizem compras.

## Índice

- [Demo](#demo)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Demo

Você pode ver uma demo funcionando [aqui](http://seulinkdemo.com).

## Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Stripe](https://stripe.com/)
- [TypeScript](https://www.typescriptlang.org/)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/ignite-shop.git

2. Navegue até o diretório do projeto:

   ```bash
   cd ignite-shop

3. Instale as dependências:

   ```bash
   npm install

## Configuração

1. Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis de ambiente:

  ```bash
  NEXT_URL=http://localhost:3000
  STRIPE_PUBLIC_KEY=pk_test_51Pib5nRsmSpNP7L3Ht4hEttn9hp2E0QboFqI9d1rFYB0bxIbfIWuOCnQlOyLsY4AYoxrHg9HaZEZwxpZ1vKO2axf00wlCRvnHy
  STRIPE_SECRET_KEY=sk_test_51Pib5nRsmSpNP7L3br2R7brr6jXPpj5HuuVWF4tmTdUdWL8cTxYoIfmE5UGufPcUXaVb0YJO4fhusxZGwGjmML2q00lC83OsbX

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
  