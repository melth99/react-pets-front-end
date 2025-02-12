// src/services/petService.js
// Where we define all the fetch calls to the backend api for the PETS resource

// What every api call will start with
// we know its /pets because of this line in the server
// app.use('/pets', petRouter)

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`;

async function index(){
    try{
        const response = await fetch(BASE_URL)
        //parse json opening the json box to get our array of objects
        const data = await response.json()
        //resturn the data out of the function
        return data
    }
    catch(err){
console.log(err)
    }
}

export { index }