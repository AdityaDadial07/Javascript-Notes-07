//Hoisting
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.

//Function calling before declaration
console.log(message('Aditya'))

//Normal function declaration
function message(name){
    console.log(`Hello everyone, ${name} is here to prove myself. Wait and watvh`) //Hello everyone, Aditya is here to prove myself. Wait and watvh
}



//Function expression
let message=function(name){
    console.log(`Hello everyone, ${name} is here to prove myself. Wait and watvh`) //Error
}