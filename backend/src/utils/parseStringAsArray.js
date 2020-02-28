/* seguindo os conceitos do DRY (Dont repeat yourself), que significa não duplicar uma regra
mas sim isolar e reutilizar o código já produzido, criamos este arquivo! */

/* lembrando que esta regra foi utilizada para listar as techs e agora para fazer as buscas! */

module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map(tech => tech.trim());
}

/* map percorre um array e pra cada informação que tem dentro do vetor ele executa uma função
 no caso o trim() que remove espaçamentos antes e depois de uma string */