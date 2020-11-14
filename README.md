# Desafio-Frontend-Developer Linx

[Link do layout:](https://xd.adobe.com/spec/4025e242-a495-4594-71d2-5fd89d774b57-3614)

## Ferramentas utilizadas

- HTML 5
- CSS 3
- Javascript

## Estrutura de Pastas

| Nome da Pasta | Descrição                                    |
| ------------- | -------------------------------------------- |
| `scripts`     | Scripts da landing page                      |
| `styles`      | Estilo global, e estilização da landing page |
| `index`       | Index da landing page                        |

## Descrição

O desafio é um e-commerce, onde os produtos são gerados através de uma api.

## HTML 5

O HTML tenta ser o bem semantico, com comentários curtos para localizar dentro do código.

## CSS 3

- CSS separado em 2 arquivos. O primeiro arquivo é um estilo global, e o segundo estilo da landing page. Para responsividade usei o media queries.

- Para organizar o display, usei o estilo flex.

## Javascript

- loadProducts: Uma função que faz requisição da api através do fetch, e depois atribuí as respostas obtidas por meio de parâmetro na função renderProdutcs.

- renderProducts utiliza o metódo forEach para percorrer todo array, depois usa o destructuring para usar as propriedades como parâmetro.

- innerHTML para criar dinamicamente os cards no HTML.

- Dois event listener, uma para garantir que DOM carregue antes que chame o js, e o outro para o botão de chamar mais produtos.

# Autenticação

- 3 funções de verificação, uma para nome, outra para e-mail, e a última para cpf. Comparações feita com regex.

- 2 funções gerais, que chamam as outras 3. Uma para cadastrar usuário, e outra para enviar convite a amigo.

## Deploy

o deploy foi feito através do site netifly.

## Agradecimento

Muito obrigado pela oportunidade de participar desse desafio, foi muito legal bom. Espero que o resultado seja satisfatório.

## Author

| ![Anderson Vieira Lidio](https://avatars0.githubusercontent.com/u/59943925?s=400&u=56d24f89e2742b77de0ae9e9de2d0005f566395c&v=4) |
| :------------------------------------------------------------------------------------------------------------------------------: |
|                                     [Anderson Veira Lidio](https://github.comAndersonvlidio)                                     |
