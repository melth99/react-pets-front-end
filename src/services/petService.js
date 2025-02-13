
// Where we define all the fetch calls to the backend api for the PETS resource

// What every api call will start with
// we know its /pets because of this line in the server
// app.use('/pets', petRouter)
const BASE_URL =  `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`


// As a user, I want to be able to view all of the pets.
async function index(){
    try {
        const response = await fetch(BASE_URL)
        // parse the json (Opening the json box to get our array of objects)
        const data = await response.json()
        // return the data out of the function when we call it
        return data 
    } catch(err){
        console.log(err)
    }
}

// I want to be able to create a PET
// Where (what component) do we want to call this function?
// Answer - Wherever the state is that pertains to this data
// When do we want to call this function?
// When we submit the form
async function create(formData){

    try {
        const response = await fetch(BASE_URL, {
            // specify http method
            method: 'POST',
            // specify headers to tell the express server
            // we are sending json
            headers: {
                'Content-Type': 'application/json'
            },
            // body is the data we are sending to the server
            // wrap it in json
            body: JSON.stringify(formData)
        })

        const data = await response.json()
        return data

    } catch(err){
        console.log(err)
    }

}

export { index, create }