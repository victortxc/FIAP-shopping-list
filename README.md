# Endpoints
## Listar Items
Endpoint: /items
Método: GET
Descrição: Retorna a lista de todos os items.

## Obter um Item
Endpoint: /items/:id
Método: GET
Descrição: Retorna um item específico com base no ID fornecido.

## Criar um Item
Endpoint: /items
Método: POST
Descrição: Cria um novo item. Requer um corpo JSON com os campos title, category, e quantity.

## Atualizar um Item
Endpoint: /items/:id
Método: PUT
Descrição: Atualiza um item existente com base no ID fornecido. Requer um corpo JSON com os campos a serem atualizados.

## Excluir um Item
Endpoint: /items/:id
Método: DELETE
Descrição: Exclui um item com base no ID fornecido.

# Exemplos
## Exemplo de Corpo para Criar/Atualizar um Item

{
  "title": "Item de Exemplo",
  "category": "Categoria de Exemplo",
  "quantity": 3,
  "purchased": false
}
