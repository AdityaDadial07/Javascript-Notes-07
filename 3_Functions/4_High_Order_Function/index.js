//High Order Function

// 1. Function as an argument
//Passing function as an argument also known as callback function
let uppercase=function(value){
    return value.upperCase();
}

let lowercase=function(value){
    return value.lowerCase();
}

let transformer=function(str,fn){ //transformer is a higher order function
    return fn(str);
}

console.log(transformer('hello',uppercase));//HELLO

//2. Function as a return value
//Returning function from another function
let compliment = function(message){
    return function(name){
        return message + ' ' + name;
    }
}

console.log(compliment("hello everyone")("Aditya"));////hello everyone Aditya