//Object
//Object is a non-primitive data type in JavaScript. It is a collection of key-value pairs.
//An object is a collection of properties, and a property is an association between a key (or name) and a value.

//Creating an Object
let person ={
   
    name: 'john',
    age: 25,
    isAdult: true,
    hobbies: ['reading', 'travelling', 'cooking'],
}

//Accessing Object Properties
//You can access the properties of an object using the dot notation (.) or the bracket notation ([]).
console.log(person.name) // john 
console.log(person['hobbies'])// ['reading', 'travelling', 'cooking']

//Modifying Object Properties
person.name = "Adiyta";
console.log(person.name) // Aditya
console.log(person)

//Adding New Properties
person.location = 'New York';
console.log(person.location); // New York

//Deleting Properties
delete person.location;
console.log(person) // {name: "Aditya", age: 25, isAdult: true, hobbies: Array(3)}