const express = require('express');
//Instalamos e importamos a biblioteca express
//express facilita a criar as rotas da aplicação e criar o servidor

/* Instalamos tambem o "nodemon -D" -D significa que se trata de uma dependência de desenvolvimento 
 que não será mais utilizada quando a aplicação entrar em produção, nodemon faz o refresh ao salvar
 aplicando as alterações realizadas no código */

const app = express();
// Usar o recurso na nossa aplicação

//Rotas, métodos e parâmetros: get, post, put, delete

app.get('/', (request, response) => {
return response.json({ message: 'Hello Omnistack' });

/* precisamos ter um unico idioma pra se comunicar entre o front e o back end, escolhemos o JSON
JSON precisa ser um objeto ou um vetor
Objeto: varias informações de uma entidade, Array: Lista */
});

// quando acessamos alguma rota da aplicação podemos fazer uma requisição do front end, solicitando informações
// ou podemos usar response para dar uma resposta


app.listen(3333);
// Definimos uma porta para acessar o servidor