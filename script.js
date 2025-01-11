const linkApi =  "https://pokeapi.co/api/v2/pokemon/"


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
      </div>
    `;
    
    htmlPagina.innerHTML += html;

}

function mostrarDescripcionPokemon(data){
  const parrafo = document.createElement("p");
  const htmlPagina = document.querySelector(".poke-card");
  const descripcion = `${data.flavor_text_entries.find(entry => entry.language.name === 'es').flavor_text}`;
  console.log(descripcion)

  parrafo.classList.add("descripcion");
  parrafo.textContent = descripcion;

  // Agregar el párrafo al contenedor
  htmlPagina.appendChild(parrafo);
}

function NumeroRandom(){
  const num = Math.floor(Math.random() * 900)
  return(num)
}


function mostrarPokemonRandom(){
const randomNumber = NumeroRandom()
console.log(randomNumber)
const link = `${linkApi}` + `${randomNumber}`
fetch(link)
.then(resp => resp.json())
.then(data => mostrarPokemon(data))
//Descripcion
const linkDescripcion = `https://pokeapi.co/api/v2/pokemon-species/${randomNumber}/`
fetch(linkDescripcion)
.then(resp => resp.json())
.then(data => mostrarDescripcionPokemon(data))
}



