async function getPokemon(number=1) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
    const pokemon = await response.json();
    return pokemon;
}

const random = Math.floor(Math.random() * 151) + 1;

let pokemon = ''
getPokemon(random).then(pokemonInfo => {
    pokemon = pokemonInfo
    fillPokemonInfos(pokemon)
    document.body.classList.add(pokemon.types[0].type.name)
})


function fillPokemonInfos(pokemon) {
    const pokeHtml = `
    <main>
        <section class="pokemon-info">
            <h2 class="pokemon-info--order">#${pokemon.order}</h2>
            <h1 class="pokemon-info--name">${pokemon.name}</h1>
        </section>
        <section class="pokemon-stats">
            <p class="pokemon-stats-weight"><span>Weight:</span> ${pokemon.weight / 10}kg</p>
            <p class="pokemon-stats-height"><span>Height:</span> ${(pokemon.height * 0.1).toFixed(1)}m</p>
        </section>
        <section class="pokemon-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}" class="img-pokemon">
        </section>
        <section class="pokemon-type">
            <h3 class="pokemon-type--title">Type</h3>
            <div class="pokemon-type--container">
                <div class="pokemon-type--${pokemon.types[0].type.name}">
                    <p>${pokemon.types[0].type.name}</p>
                </div>
                
            </div>
        </section>
    </main>
    `

    document.body.innerHTML = pokeHtml
}