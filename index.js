//problem one, test if animal is on the list
let animalbtn = document.querySelector("#animalBtn")


animalbtn.addEventListener("click", async (e) =>{
    let animal = document.querySelector("#animal")

    let results = await axios.get(`http://localhost:3000/animals/${animal.value}`)
    // debugger
    console.log(results.data)

    
    // results.data.images.forEach((el) => {

        
    // })


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

