function displayCards(){
    const CARDS = document.getElementById("petCards");
    CARDS.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        CARDS.innerHTML+=`
        <div class="pet">
            <p>Name:${pet.name}</p>
            <p>Age:${pet.age}</p>
        </div>
        ` 
    }
}

function displayRows(){
    //get the tbody
    const TABLE = document.getElementById("petRows");
    // clear the tbody
    let row="";

    //travel the array (for)
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        
        row+=`
            <tr id="${i}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td> 
                <td>${pet.breed}</td> 
                <td>${pet.service}</td>
                <td>${pet.visit}</td>        
                <td> <button class="btn btn-md btn-danger" onclick="deletePet(${i})"> Delete </button></td>
            </tr>
        `;
    }
    TABLE.innerHTML=row;
    document.getElementById("totalPets").innerHTML=pets.length;    
}