const express = require('express');
//Instalamos e importamos a biblioteca express
//express facilita a criar as rotas da aplicação e criar o servidor

/* Instalamos tambem o "nodemon -D" -D significa que se trata de uma dependência de desenvolvimento 
 que não será mais utilizada quando a aplicação entrar em produção, nodemon faz o refresh ao salvar
 aplicando as alterações realizadas no código */

// Baixamos o Insomnia para testar as rotas da API

const mongoose = require ('mongoose');
// adicionamos o mongoose para rodar o MongoDB

const routes = require('./routes');
// Importamos o módulo de rotas

const app = express();
// Usar o recurso na nossa aplicação

mongoose.connect('mongodb+srv://gu_morilla:Azura23@cluster0-sfpoh.mongodb.net/test?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
// Conectamos com um banco de dados não-relacional (MongoDB)

app.use(express.json());
/* Precisamos informar a nossa aplicação que será utilizado JSON para entender requisições que tem o corpo no
formato JSON */

app.use(routes);

//Métodos HTTP: GET, POST, PUT, DELETE
/* tipos de parâmetros dentro do express:

Query params: request.query (Filtros, ordenação, paginação, ...) ficam visíveis na URL  /'get'
Route params: request.params (Identificar um recurso na alteração ou remoção usando somente rotas) /'put', 'delete'
Body: request.body (Dados para criação ou alteração de um registro) /'post', 'put'
Usamos o JSON para escrever o corpo da nossa requisição usando o formato de objeto do javascript, a única 
particularidade é que temos que usar as aspas duplas para cada elemento. */

app.listen(3333);
// Definimos uma porta para acessar o servidor