# Chamada de criação de habilidades (ex: cozinheiro, esportista, etc)

## Endpoint

`POST /api/abilities`

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
  "name":"fullstack developer",
  "active":true, /*atributo  opcional*/
}
```

## Caso de sucesso

- Chamada de criação de habilidades (ex: cozinheiro, esportista, etc), deve cadastrar todas as informações da tabela Abilities;
- Active deve ser por padrão true para novas habilidades.



### Resposta

- Código de status: **201 Created**

```json
{
    "document": {
        "id": "03110646-4d05-498d-bfda-88ea1b73b5ea",
        "name": "RG",
        "url": "http://localhost:3000/uploads/74918bbe74dd32e87af898dec6c3f501",
        "userId": "a63299d3-a8b3-41a6-8daa-a9ff5514f334",
        "created_at": "2024-12-23T00:16:26.397Z",
        "updated_at": "2024-12-23T00:16:26.397Z"
    }
}
```

### Resposta

- Código de status: **201 Created**