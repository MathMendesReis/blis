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
   docker compose -f docker-compose.dev.yml up 
   # ou em background:
   docker compose -f docker-compose.dev.yml up -d
   ```

