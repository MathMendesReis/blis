# Chamada de criação do usuário, deve cadastrar todas as informações da tabela de Users

## Endpoint

`POST /api/users`

## Corpo da Requisição

O corpo da requisição deve conter os seguintes campos:

- **name** (string)
- **birthdate** (string)
- **email** (string)
- **password** (string)

Exemplo:

```json
{
  "name":"matheus",
  "birthdate":"2021-09-09",
  "email":"matheus@example.com",
  "password":"123456"
}
```

## Caso de sucesso

- Validar se o email ja está cadastrado
- Caso não, faz a criptografia da senha e salva no DB

### Resposta

- Código de status: **201 Created**