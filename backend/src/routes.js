const { Router } = require('express');
// quando queremos importar algo específico do express podemos usar chaves

const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const axios = require('axios');
//Intalamos Axios que faz chamadas para outras API's

const Dev = require('./models/Dev');
// Importamos nosso arquivo com o Schema para criarmos nosso Dev

const routes = Router();
// adicionamos a constante "routes" que contem a função do express

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index);

/* Quando acessamos alguma rota da aplicação podemos fazer uma requisição do front end, solicitando informações
 ou podemos usar response para dar uma resposta.

    Aqui abstraímos parte do código das rotas para um arquivo Controller separado e então importamos ao
     nosso arquivo principal de maneira simplificada usando o nome do arquivo e o método desejado.
 */

module.exports = routes;
/* Para nossa aplicação encontrar essas rotas precisamos exportar transformando o arquivo em módulo
e em seguida importar no nosso index. */