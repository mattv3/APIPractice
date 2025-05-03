document.querySelector("button").addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    // console.log(choice)
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

    fetch(url)
        .then(response => response.json()) // parse response as JSON
        .then(data => {
            // console.log(data.sprites.other.dream_world.front_default)
            // console.log(data)
            document.querySelector('h3').innerText = data.name
            document.querySelector('img').src = data.sprites.other.dream_world.front_default
        })
}

// async await
// fetchData()
// async function fetchData() {
    
//     try {
//         const response = await fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//         if(!response.ok) {
//             throw new Error("Could not fetch resource")
//         }
//         const data = await response.json();
//         console.log(data)
//     }
//     catch(error){
//         console.log(error)
//     }
// }