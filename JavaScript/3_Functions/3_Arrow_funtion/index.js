//Arrow function
//Arrow function is a new feature in ES6 that allows you to create functions using a shorter syntax.
//Arrow functions are anonymous functions, which means that they do not have a name.
//Arrow functions are not hoisted like regular functions.
//Arrow functions do not have their own this. The value of this inside an arrow function is always inherited from the enclosing scope.
//Arrow functions are always anonymous.
//Not use function keyword
//No need of return keyword if only one statement is there
//No need of curly braces if only one statement is there

//Function expression
let sum=function(a,b)
{
    return a+b;
}
console.log(sum(1,3));//4

//Equivalent Arrow function
let sum2=(a,b)=>a+b;
console.log(sum2(1,3));//4

let sum3=(a,b)=>{
    return a+b;
}
console.log(sum3(1,3));//4