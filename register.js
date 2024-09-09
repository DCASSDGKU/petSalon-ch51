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

function register(){
    console.log(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value);
    pets.push(newPet);
    console.log(newPet);
}

function init(){
    console.log("init fn");
    let scooby = new Pet("Scooby",60,"Male","Dane");
    pets.push(scooby);
}

window.onload=init;