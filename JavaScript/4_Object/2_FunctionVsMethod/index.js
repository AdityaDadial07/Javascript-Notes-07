//Funtion VS Method
//Function
//  - Function is a block of code that is defined once and can be called multiple times.
let greet = function(){
    console.log('Hello World');
}
greet(); // Hello World


// Method
//  - Method is a function that is associated with an object.
let person ={
    name: 'John',
    age: 22,
    isAdult: true,
    greet: function(){
        console.log('Hello World');
    }
}
person.greet();// Hello World

//this keyword
// - The this keyword refers to the object that the method is associated with.
let person2 ={
    name: 'John',
    age: 22,
    isAdult: true,
    greet: function(){
        console.log("Hello, ",this.name);
    }
}
person2.greet();// Hello, John