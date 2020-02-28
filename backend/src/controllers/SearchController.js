const Dev = require ('../models/Dev');

const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
    async index(request, response){
    console.log(request.query);

    const { latitude, longitude, techs } = request.query;
    const techsArray = parseStringAsArray(techs);

    console.log(techsArray); // visualizamos o array! que antes era apenas uma string 

    const devs = await Dev.find({
        techs: {
            $in: techsArray,
        },
        location: {
            $near: {
                $geometry: {
                    //Precisamos passar a estrutura de uma localização (Ponto e coordenadas)
                    type: 'Point', 
                    coordinates: [longitude, latitude],
                    //O MongoDB lê primeiro a longitude!
                },
                $maxDistance: 10000, //metros = 10km
            },
        },

        // para inserirmos filtros nessa busca, precisamos passar um objeto!
        // Estude sobre MongoDB Operators
    });
        //Buscar devs num raio de 10km
        //Filtrar por tecnologias
        return response.json({ devs });
    }
}