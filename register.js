let pets=[];//empty array

function Pet(name,age,gender,breed){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
}
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(pet){
    let validation =true;
    //check if name is empty
    if(pet.name==""){
        validation=false;
    }

    return validation;
    
}

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value);
    pets.push(newPet);
    console.log(newPet);
    displayCards();
}

function init(){
    console.log("init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane");
    let scrappy = new Pet("Scrappy",50,"Male","Boxer");
    pets.push(scooby,scrappy);
    displayCards();
}

window.onload=init;