// Criamos esse Point Schema em uma nova pasta pois nãos e trata de um Schema, nao irá se transformar em uma
// tabela no banco de dados, é só uma utilidade

const mongooose = require('mongoose');

const PointSchema = new mongooose.Schema({
    type: {  //não define o tipo, se trata de uma coluna ou campo
        type:String,
        enum: ['Point'], // pesquisar sobre formato point
        required: true
        //ler documentação do MongoDB
    },

    coordinates: {
        type: [Number],
        required:true
    },
});
module.exports = PointSchema;