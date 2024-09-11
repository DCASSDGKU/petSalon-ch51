function displayCards(){
    const CARDS = document.getElementById("petCards");
    CARDS.innerHTML="";
    for(let i=0;i<pets.length;i++){
        let pet = pets[i];
        CARDS.innerHTML+=`
        <div class="pet">
            <p>${pet.name}</p>
            <p>${pet.age}</p>
        </div>`
        
    }
}

function displayRows(){
    //get the tbody

    // clear the tbody

    //travel the array (for)

        //create the template row
        //ROW.innerHTML=`
            //<tr>

            //</tr>
        //`
}

//*** on the register.js replace the displayCrads() by dislayRows()/

