//problem one, test if animal is on the list
let animalbtn = document.querySelector("#animalBtn")


animalbtn.addEventListener("click", async (e) =>{
    let animal = document.querySelector("#animal")

    let results = await axios.get(`http://localhost:3000/animals/${animal.value}`)
    debugger
    console.log(results.data)
    // results.data.images.forEach((el) => {

        
    // })


})

