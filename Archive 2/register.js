let pets=[];//empty array

function Pet(name,age,gender,breed,service,visit){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.visit=visit;

}
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputVisit = document.getElementById("txtVisit");

function isValid(pet){
    let validation =true;
    //check if name is empty
    if(pet.name==""){
        validation=false;
    }
    return validation; 
}

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputVisit.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputVisit.value);

    if(isValid(newPet)==true){
        pets.push(newPet)
        console.log(newPet);
        displayRows();
    }else{
        alert("Fill the information");
    }

}
function deletePet(petID){
    console.log("Deleting the pet");
    document.getElementById(petID).remove();
    pets.splice(petID,1);
    displayRows();
}

function search(){
    //by name
    displayRows();
    //display on the console the text that user enters on the input
    let ss=document.getElementById("txtSearch").value;
    let foundPet=null;
    let id;

    for(let i=0;i<pets.length;i++){
        if(pets[i].name.toLowerCase() == ss.toLowerCase()){
            foundPet=pets[i];
            id=i;
            break;
        }
    }
    if(foundPet){
        document.getElementById(id).classList.add("highlight");
    }else{
        displayRows();
    }
}

function init(){
    console.log("init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane","grooming","appointment");
    let scrappy = new Pet("Scrappy",50,"Male","Boxer","vaccines","appointment");
    pets.push(scooby,scrappy);
    displayRows();
}
window.onload=init;