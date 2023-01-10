function displayTable(){
    let petSection = document.getElementById("newTable");
    let table ="";
    for(let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        table += `
            <tr>
                <td>Name: ${pet.name}</td>
                <td>Age: ${pet.age}</td>
                <td>Gender: ${pet.gender}</td>
                <td>Breed: ${pet.breed}</td>
                <td>Service: ${pet.service}</td>
                <td>Owner's Name: ${pet.owner}</td>
                <td>Contact Phone: ${pet.phone}</td>
            </tr>
        `;
    }
    petSection.innerHTML=table;
}