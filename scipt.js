document.querySelector("button").addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    // console.log(choice)
    const url = `https://pokeapi.co/api/v2/pokemon/${choice}`

    fetch(url)
        .then(response => response.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        })
}








// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.name)
//     })

//     .catch(error => {
//         console.log(error)
//     })




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