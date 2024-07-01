import fetch from "node-fetch";


const getPokemon = () => {
    const url = `https://tyradex.tech/api/v1/gen/1`
    return fetch(url)
        .then(res => res.json())
        // data contient un tableau d'objet "pokémon"
        .then(data => {
            const pokemonList = []
            // Pour chaque tour de boucle, on a accès à 1 pokémon
            data.forEach(pokemon => {

                // On doit se créer un objet pokémon vide pour accueillir (formater) les données dont on a besoin
                // let currentPokemon = new Pokemon()
                let currentPokemon = {}
                currentPokemon.id = pokemon.pokedex_id;
                currentPokemon.generation = pokemon.generation;
                currentPokemon.category = pokemon.category;
                currentPokemon.name = pokemon.name;
                currentPokemon.sprites = pokemon.sprites;
                currentPokemon.types = pokemon.types;
                currentPokemon.evolution = pokemon.evolution;
                currentPokemon.height = pokemon.height;
                currentPokemon.weight = pokemon.weight;
                pokemonList.push(currentPokemon);

            });
            return pokemonList

        })

}


export default {
    listPokemon: ((req, res, next) => {
        res.locals.pokemon = getPokemon()
        next();
    })
}