function mostrarPokemon(data){
    let htmlPagina = document.querySelector(".poke-card");
    var tipos = data.types.map(typeInfo => typeInfo.type.name);
    const html = `
    <div class="poke-card" data-id="${data.order}">
        <img class="img-card" src="${data.sprites.other["official-artwork"].front_default}" alt="${data.name}" />
        <h2 class="nombre">${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</h1>
        <div class="tipos">
        <h3 class="tipo">${tipos.map(element => {return element.charAt(0).toUpperCase() + element.slice(1);}).join(" ")}</h4>
        </div>
        <p class="descripcion">"Descripcion en proceso"</p>
      </div>
    `;
    
    htmlPagina.innerHTML = html;

}

function NumeroRandom(){
  const num = Math.floor(Math.random() * 900)
  return(num)
}


function mostrarPokemonRandom(){
const link = `${linkApi}` + `${NumeroRandom()}`
console.log(link)
fetch(link)
.then(resp => resp.json())
.then(data => mostrarPokemon(data))
}




const linkApi =  "https://pokeapi.co/api/v2/pokemon/"


//Agregar el listener

const btn = document.querySelector("#btn-generate");
