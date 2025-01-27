# Wishlist API

Uma API simples de wishlist para e-commerce, construída com Node.js, Express, SQLite e Prisma. Permite que os usuários visualizem produtos, adicionem itens à sua lista de desejos e removam itens conforme desejado.

## Tecnologias Utilizadas

-   **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
-   **Express**: Framework para construir APIs de forma rápida e fácil.
-   **Neon**: Banco de dados PostgreSQL na nuvem.
-   **Prisma**: ORM (Object-Relational Mapping) para interagir com o banco de dados de forma eficiente.
-   **CORS**: Middleware para habilitar o compartilhamento de recursos entre diferentes origens.

## Funcionalidades

-   Listar todos os produtos disponíveis.
-   Adicionar produtos à wishlist.
-   Listar produtos na wishlist.
-   Remover produtos da wishlist.

## Pré-requisitos

-   Node.js (versão 14 ou superior)
-   npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/jorginhodev/wishlist-api.git
   cd wishlist-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo ⁠.env na raiz do projeto com a seguinte configuração:
   ```bash
   DATABASE_URL="postgresql://username:password@hostname:port/database"
   ```
   Substitua ⁠username, ⁠password, ⁠hostname, ⁠port e ⁠database pelos valores apropriados para o seu banco de dados Neon.

4. Alternativa: Para rodar localmente, você pode criar uma conta no Neon ou usar o Docker para configurar um banco de dados PostgreSQL localmente. Para usar o Docker, execute:
   ```bash
   docker run --name wishlist-db -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres
   ```

5. Inicialize o banco de dados e crie as tabelas:
   ```bash
   npx prisma migrate dev --name init
   ```

6. Popule a tabela de produtos:
   ```bash
   node seed.js
   ```

7. Inicie o servidor:
   ```bash
   node server.js
   ```

O servidor estará rodando em `http://localhost:3333`.

## Desenvolvimento Local

Para desenvolvimento local com hot-reload:
```bash
npm run dev:local
```

Para desenvolvimento com ambiente Vercel:
```bash
npm run dev
```

## Endpoints

-   Listar Produtos
    -   Método: GET
    -   URL: ⁠/api/products
-   Adicionar à Wishlist
    -   Método: POST
    -   URL: ⁠/api/wishlist
    -   Corpo:
        ```json
        {
            "code": "D22-2077-006"
        }
        ```

-   Listar Wishlist
    -   Método: GET
    -   URL: ⁠/api/wishlist
-   Remover da Wishlist
    -   Método: DELETE
    -   URL: ⁠/api/wishlist/:code

## Uso

Você pode usar ferramentas como Postman ou cURL para interagir com a API. Exemplos de uso:

-   Listar produtos:
    ```bash
    curl -X GET http://localhost:3333/api/products
    ```
-   Adicionar produto à wishlist:
    ```bash
    curl -X POST http://localhost:3333/api/wishlist -H "Content-Type: application/json" -d '{"code": "D22-2077-006"}'
    ```
-   Listar wishlist:
    ```bash
    curl -X GET http://localhost:3333/api/wishlist
    ```
-   Remover produto da wishlist:
    ```bash
    curl -X DELETE http://localhost:3333/api/wishlist/D22-2077-006
    ```

## Observações

Para rodar a API em produção, você pode acessar o link abaixo:
-   [Vercel](https://wishlist-api-gray.vercel.app)

Para rodar a API localmente, você pode seguir os passos da seção [Instalação](#instalação).
