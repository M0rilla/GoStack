//Models são representações de entidade que iremos armazenar no banco de dados

const mongoose = require ('mongoose');
const PointSchema = require ('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
    location: {  //definimos um objeto e não simplesmente um tipo
        type:PointSchema,
        index: '2dsphere',
        // Quando trabalhamos com geolocalização precisamos usar um índice
    } 
   
});
//Instanciamos todos os dados do nosso Dev que será cadastrado e criamos nosso Schema

module.exports = mongoose.model('Dev', DevSchema);
// exportamos esse arquivo para podermos inseri-lo na nossa aplicação
// precisamos agora de uma rota para cadastrar os novos usuários