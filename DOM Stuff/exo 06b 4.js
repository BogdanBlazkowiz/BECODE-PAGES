for (i=0;i<151;i++) {
    newPokemon = document.createElement("img");
    newPokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i+1}.png`
    document.querySelector("div").appendChild(newPokemon);
}