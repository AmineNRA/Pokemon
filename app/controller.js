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
    home: async (req, res) => {
        const pokemon = await getPokemon()
        // console.log(pokemon[1].types)
        res.render("home", {});
    },
    category: async (req, res) => {
        const categoryType = req.params.category
        const pokemons = await getPokemon()
console.log(pokemons[1].types)
/**
 * 
 * @param {array} allPokemons liste de pokémon où chercher
 * @param {string} searchedType type recherché
 */
const findPokemonByType = (allPokemons, searchedType) => {
    let pokemonList = []
    for (let i = 0; i < 2; i++) {
        pokemonList.push(allPokemons.filter(pokemon => pokemon.types[i].name === searchedType));
    }
    // La tu save en localStorage si tu veux ou tu return le pokemonList ou les deux ^^
}


    console.log(findPokemonByType(pokemons, 'Plante'))
        res.render('category')
    }
}