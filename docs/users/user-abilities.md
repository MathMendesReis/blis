# Chamada de relacionamento entre users e abilities, deve poder cadastrar todas as informações da tabela UsersAbilities

## Endpoint

`POST /api/users/abilities`

## Cabeçalhos da Requisição

O cabeçalho da requisição deve conter:

- **Authorization** (string): Token de acesso

Exemplo:

```json
{
  "Authorization": "Bearer jwt_token"
}

## Corpo da Requisição

O corpo da requisição deve conter os seguintes campos:

- **name** (string)
-

Exemplo:

```json
{
    "yearsExperience":5,
    "abilitiesId":"dfjlasfsdk"
}
```


### Resposta

- Código de status: **201 CREATED**

