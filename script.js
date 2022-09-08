let form = document.getElementById('form')
let input = document.getElementById('txtn')
let inputV = Number(input.value)
let numero = document.getElementById('pok_number')
let nome = document.getElementById('pok_name')
let img = document.getElementById('pok_img')
let poknum = ''



const renderPokemon = async(pokemon) => {
    const data = await fetchPokemon(pokemon);

    var num = data.id
    img.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${num}.gif" alt="" class="pokimg"></img>`
    numero.innerHTML =data.id
    nome.innerHTML = data.name
    poknum = data.id

    console.log(data)
    console.log(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon}.gif`)
}

const fetchPokemon =async (pokemon) => {

    const APIResponc = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)

    const data = await APIResponc.json();

    return data
} 


form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value)
} )



function mais1(){
    let valor = poknum
    valor = valor +1
    renderPokemon(valor)
    String(valor)
    
   
}

function menos1(){
    let valor = poknum
    
    if(valor> 1){
        valor = valor -1
        renderPokemon(valor)
        String(valor)
    }
}

