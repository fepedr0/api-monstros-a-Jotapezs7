# Monstros API

![Monstro James P. Sullivan](https://images.hive.blog/DQmXfW33cKHuJyA3bBSypLujcQDeqXRmba857h3tJWV3sF1/tumblr_ll6dzx0cjI1qfdig2o1_500_large.gif)

Este projeto contém uma API de monstros (Node.js + Express) e um frontend simples em HTML, CSS e JavaScript para exibir os monstros.

No decorrer do curso iremos adicionar mais funcionalidades! :rocket:

## Requisitos
- Node.js instalado

## Instalação e execução da API
1. Abra o terminal na pasta `api`:
   ```pwsh
   cd api
   ```
2. Instale as dependências:
   ```pwsh
   npm install
   ```
3. Inicie a API:
   ```pwsh
   node index.js
   ```
   A API estará disponível em `http://localhost:3000/monstros`.

## Execução do Frontend
1. Volte para a pasta raiz do projeto (onde está o `index.html`).
2. Basta abrir o arquivo `index.html` em seu navegador (clique duas vezes ou use "Abrir com" > navegador).
3. O frontend irá buscar os monstros da API e exibi-los.

## Observações
- Certifique-se de que a API está rodando antes de abrir o frontend, para que os monstros sejam carregados corretamente.
- Se mudar a porta da API, atualize a URL em `script.js`.

