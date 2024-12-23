# Chamada de login do usuario

## Endpoint

`POST /api/session/login`

## Corpo da Requisição

O corpo da requisição deve conter os seguintes campos:

- **email** (string)
- **password** (string)

Exemplo:

```json
{
  "email":"matheus@example.com",
  "password":"123456"
}
```

## Caso de sucesso

- Validar se o email ja está cadastrado
- Caso não, faz a criptografia da senha e salva no DB

### Resposta

- Código de status: **200 Ok**
- Corpo da resposta: Um objeto com o token jwt.

Exemplo:

```json
{
    "token": "value_token"
}
```