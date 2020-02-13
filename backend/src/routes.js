const { Router } = require('express');
// quando queremos importar algo específico do express podemos usar chaves

const axios = require('axios');
//Intalamos Axios que faz chamadas para outras API's

const Dev = require('./models/Dev');
// Importamos nosso arquivo com o Schema para criarmos nosso Dev

const routes = Router();
// adicionamos a constante "routes" que contem a função do express

routes.post('/devs', async (request, response) => {

    //console.log(request.body); -- Desestruturação
    const { github_username, techs } = request.body;
    /* extraímos informações específicas do nosso body ue serão informadas pelos usuários,
     e partimos para API do Github */

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    /* fizemos uma chamada a API e criamos uma variável chamada "response", entao usamos o método get()
     com o parâmetro sendo a URL da API do github ENTRE CRASES E NAO ASPAS!
     Esse é um conceito chamado Template Strings que permite inserir variáveis dentro da String */

    //ler sobre promisse em node******

    /* adicionamos um "async" antes dos parametros request e response e um "await" na chamada da API.
    Pois trabalhando com API's, elas podem demorar pra responder então para evitar qualquer possível
     timeout usamos o async */

    //console.log(apiResponse.data); -- Desestruturação
    const { name = login, avatar_url, bio} = apiResponse.data;
    /* o "name" do usuário não é um valor obrigatório na plataforma, portanto dentro do conceito de
    desestruturação temos como atribuir outro campo no lugar de um que não existe, por padrão */
    const techsArray = techs.split(',').map(tech => tech.trim());
    // map percorre um array e pra cada informação que tem dentro do vetor ele executa uma função
    // no caso o trim() que remove espaçamentos antes e depois de uma string

    const dev = await Dev.create({
        // armazenamos o retorno do banco de dados dentro de uma variável chamada "dev"
        //o nome da variável é o mesmo nome da propriedade então não precisamos representar como em "techs"
        // Short Sintaxe
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    })

    console.log(name, avatar_url, bio, github_username);
    return response.json(dev);

/* precisamos ter um unico idioma pra se comunicar entre o front e o back end, escolhemos o JSON
JSON precisa ser um objeto ou um vetor
Objeto: varias informações de uma entidade, Array: Lista */
});

// quando acessamos alguma rota da aplicação podemos fazer uma requisição do front end, solicitando informações
// ou podemos usar response para dar uma resposta

module.exports = routes;
/* Para nossa aplicação encontrar essas rotas precisamos exportar transformando o arquivo em módulo
e em seguida importar no nosso index. */