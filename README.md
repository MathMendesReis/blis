# Blis

Esse repositorio contem a solução do desafio proposto pela blis, para a vaga de desenvolvedor backend.

## Features

### Autentificação

- [x] Deve ser possivel logar com e-mail & password;

### Users

- [x] Deve ser possivel cadastrar um novo usuario;
- [x] Deve ser possivel criar documentos dos usuarios;
- [x] Deve ser possivel relacionar habilidades a um usuario;
- [x] Deve ser possivel listar habilidades de um usuario;

### Abilities

- [x] Deve ser possivel criar novas habilidades;
- [x] Deve ser possivel editar o estado das habilidades;
- [x] Deve ser possivel deletar habiliddaes;

## 🚀 Configuração Inicial Local

1. Clone o repositório (troque `<seuusuario>` na url abaixo pelo seu usuário):

   ```bash
   git clone https://github.com/<seuusuario>/blis.git
   ```
2. Faça uma cópia do arquivo `.env

    ```bash
    sed 's/blis/localhost/g' .env.local > .env
   # ou copie o arquivo e altere no seu editor preferido
   ```

3. Rode o projeto usando docker

  ```bash
   docker compose up 
   # ou em background:
   docker compose up -d
   ```

4. Caso tenha dificuldades com o docker, suba um container de cada vez

 ```bash
   docker compose up postgres -d
   ```
 ```bash
   docker compose up backend -d
   ```

5. Caso queira rodar o projeto sem docker

   Suba o banco de dados
    ```bash
   docker compose up postgres -d
   ```
   Instale as depedencias:
    ```bash
   npm instal
   ```
   rode o projeto:
    ```bash
   npm run dev
   ```

   Obs: Não se esqueça de mudar o host para localhost