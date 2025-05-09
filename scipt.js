// document.querySelector("button").addEventListener('click', getFetch)

// function getFetch(){
//     const choice = document.querySelector('input').value
//     // console.log(choice)
//     const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

//     fetch(url)
//         .then(response => response.json()) // parse response as JSON
//         .then(data => {
//             // console.log(data.sprites.other.dream_world.front_default)
//             // console.log(data)
//             document.querySelector('h3').innerText = data.name
//             document.querySelector('img').src = data.sprites.other.dream_world.front_default
//         })
// }


// async await

async function fetchData() {

    const pokemonName = document.querySelector(".pokemonName").value.toLowerCase()
    
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        if(!response.ok) {
            throw new Error("Could not fetch resource")
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default
        const imgElement = document.querySelector(".pokemonSprite")

        imgElement.src = pokemonSprite
        imgElement.style.display = "block"
    }
    catch(error){
        console.error(error)
    }
}