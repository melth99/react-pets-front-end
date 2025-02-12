
// Always write out basic html
// import it into the file to be rendered (aka App.js)
// confirm your props in the devtools before you use them!

export default function PetList(props){

    const petLis = props.pets.map((pet) => {
        return <li key={pet._id}>{pet.name}</li>
    })

    // check to see if we have pets
    return (
        <section>
            <h1>Pet List</h1>
            {petLis.length !== 0 ? (
                <ul>
                    {petLis}
                </ul>
            ) : (
                <h2>No Pets yet!</h2>
            )}
        </section>
    )
}