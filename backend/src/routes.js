const { Router } = require('express');
// quando queremos importar algo específico do express podemos usar chaves

const routes = Router();
// adicionamos a constante "routes" que contem a função do express

routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Hello World' });

/* precisamos ter um unico idioma pra se comunicar entre o front e o back end, escolhemos o JSON
JSON precisa ser um objeto ou um vetor
Objeto: varias informações de uma entidade, Array: Lista */
});

// quando acessamos alguma rota da aplicação podemos fazer uma requisição do front end, solicitando informações
// ou podemos usar response para dar uma resposta

module.exports = routes;
/* Para nossa aplicação encontrar essas rotas precisamos exportar transformando o arquivo em módulo
e em seguida importar no nosso index. */