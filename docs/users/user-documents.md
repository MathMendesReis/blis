# Chamada de criação de um documento do usuário (RG, CNH, etc), deve cadastrar todas as informações da tabela UserDocuments

## Endpoint

`POST /api/documents`

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

- **uploaded_file** (file)
- **name** (string)
-

Exemplo:

```json
{
  "uploaded_file":"rg..webp",
  "name":"RG"
}
```

## Caso de sucesso

- Deve cadastrar todas as informações da tabela UserDocuments
- Arquivos devem ser subidos através do Multer. Configure uma pasta na raiz do projeto para armazenar todos os arquivos. Deixe o limite de tamanho do arquivo como 10mb e poder subir apenas arquivos em formato PDF
- Campo url deve conter apenas o caminho de acesso do arquivo no servidor. Crie também uma rota padrão de acesso a pasta de arquivos


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