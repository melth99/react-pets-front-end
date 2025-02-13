//pet list and pet detail are siblings
// we need to lift state to pass up to parent back down to child

export default function PetDetail(props) {
    
    if(props.selectedPet === null){
        return(
            <section>
                <h2>No pets!</h2>
            </section>
    )}

    return (
        <section>
            <h2>{props.selectedPet.name}</h2>
            <span>Breed: {props.selectedPet.breed}</span>
            <br />
            <span>Age: {props.selectedPet.age}</span>
            <br />
            <button>Delete!?!?!?!??!</button>
            <br />
            <button onClick = {() => props.setSelectPet(null)}>Close Details!!!!!!</button>
        </section>
    )
}

