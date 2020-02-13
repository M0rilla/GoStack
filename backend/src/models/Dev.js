//Models são representações de entidade que iremos armazenar no banco de dados

const mongoose = require ('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});
//Instanciamos todos os dados do nosso Dev que será cadastrado e criamos nosso Schema

module.exports = mongoose.model('Dev', DevSchema);
// exportamos esse arquivo para podermos inseri-lo na nossa aplicação
// precisamos agora de uma rota para cadastrar os novos usuários