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
        console.log(pokemon[2])
        res.render("home", {});
    },
    category: async (req, res) => {
        const pokemon = await getPokemon();
        const listTypes = [];
        // Pour chaque element de pokemon
        pokemon.forEach((e) => {
            // si la longueur du tableau types est égal à 2
            if (e.types.length == 2) {
                // pour chaque index du tableaux
                for (let i = 0; i < 2; i++) {
                    // Et si le type n'est pas à l'intérieur de notre tableau listTypes
                    if (!listTypes.includes(e.types[i].name))
                        // Ajoute le type à notre tableau
                        listTypes.push(e.types[i].name)
                }
            }
            // si la longueur de tableau est juste de 1 ( notre problème depuis le début )
            else {
                // Et si le type n'est pas à l'intérieur de notre tableau listTypes
                if (!listTypes.includes(e.types[0].name)) {
                    // Ajoute le type à notre tableau
                    listTypes.push(e.types[0].name)
                }
            }
        })
        res.render("category", {
            listTypes : listTypes,
        })
    }
}