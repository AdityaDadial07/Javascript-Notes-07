//Local Storage
//In previous to do list if we refresh page we will lose current state data

//But we can store this data in local storage
//Password is example of this
//Is an api provided by browser to store data inside browser

//console.log(window.localStorage)

// console.log(localStorage);

//Set item in local storage
localStorage.setItem('passion','programming')
localStorage.setItem('age',22)
console.log(localStorage);

//Get items in local storage
console.log(localStorage.getItem('passion'));
console.log(localStorage.getItem('age'));

//Update
localStorage.setItem("age",26);
console.log(localStorage) //Overwrite previous value

//Remove items
localStorage.removeItem("age")
console.log(localStorage);

//How to store complex data structure like
//Array of objects
//Ultimately in local storage data store in form of string formate

let vehicles=[
    {company:"Honda",model:"2009"},
    {company:"Activa",model:"2002"}
]
console.log(typeof vehicles);

let stringVehicles=JSON.stringify(vehicles);
console.log(stringVehicles);

localStorage.setItem("Vehicle",stringVehicles);
console.log(localStorage)

//Get stored items again in object formate
let storedData1=localStorage.getItem("Vehicle");
let objectVehicle=JSON.parse(storedData1);
console.log(typeof objectVehicle);