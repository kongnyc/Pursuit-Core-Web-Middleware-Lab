//problem one, test if animal is on the list
let animalbtn = document.querySelector("#animalBtn")
let randForm = document.querySelector("#randForm")


animalbtn.addEventListener("click", async (e) =>{
    let responseSet1 = document.querySelector("#responseSet1")
    e.preventDefault()
    let animal = document.querySelector("#animal")

    let results = await axios.get(`http://localhost:3000/animals/${animal.value}`)

    console.log(results)    
    let animalStatus = document.createElement("p")
    animalStatus.innerText= results.data.status
    responseSet1.appendChild(animalStatus)
    
    



})

randForm.addEventListener("submit", async (e) =>{
    
    let results = await axios.get(`http://localhost:3000/?floor=1&?ceil=10`)
    let randNum = document.createElement("p")
    randNum.innerText= results.data.randPick
    responseSet2.appendChild(randNum)
    debugger

    // let responseSet1 = document.querySelector("#responseSet1")
    // e.preventDefault()
    // let animal = document.querySelector("#animal")

    // let results = await axios.get(`http://localhost:3000/animals/${animal.value}`)

    // console.log(results)    
    // let animalStatus = document.createElement("p")
    // animalStatus.innerText= results.data.status
    // responseSet1.appendChild(animalStatus)
    
    



})

