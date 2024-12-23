# Chamada de edição de habilidades, deve poder ativar ou desativar uma habilidade criada (active true ou false)

## Endpoint

`PUT /api/abilities/abilitiesId`

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
    "active":true
}
```

## Caso de sucesso

- Chamada de criação de habilidades (ex: cozinheiro, esportista, etc), deve cadastrar todas as informações da tabela Abilities;
- Active deve ser por padrão true para novas habilidades.



### Resposta

- Código de status: **204 no-content**

