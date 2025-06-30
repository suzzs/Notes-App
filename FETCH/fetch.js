/*fetch("https://api.api-ninjas.com/v1/quotes")
.then(response =>{
    if(!response.ok){
        throw new Error("Could not fetch resource");
    }
})
.then(data => console.log(data.id))
.catch(error => console.error(error));*/
fetchData();
async function fetchData(){
    try{

        const pokemonName = document.getElementById("pokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new AggregateError("could not fetch");
        }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement =document.getElementById("pokemonSprite");


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(error){
        console.error(error);
    }
}