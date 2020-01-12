//problem one, test if animal is on the list
let animalbtn = document.querySelector("#animalBtn")
let randForm = document.querySelector("#randForm")
let responseSet1 = document.querySelector("#responseSet1")

animalbtn.addEventListener("click", async (e) =>{
    
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



let peek = document.querySelector("#peek")
let dequeued = document.querySelector("#dequeued")
let enqueued = document.querySelector("#enqueued")
let input = document.querySelector("#name")

peek.addEventListener("click",async()=>{
    // console.log("ke")
    let data = await axios.get(`http://localhost:3000/queue/peek/`)
    debugger
    // console.log(data.data)

    // debugger
})
dequeued.addEventListener("click",()=>{
    console.log("dequeued")
})
enqueued.addEventListener("click",()=>{
    console.log(input.value)
})

