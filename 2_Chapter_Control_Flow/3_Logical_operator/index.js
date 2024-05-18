//And && , OR || , NOT !
let password ="qwerty@";
if(password.length>5 && password.includes('@')){
    console.log("Password is strong");
}
else{
    console.log("Password is weak");
}


//Not operator
let status=false
if(!status){
    console.log("status is ",status);
}

//Priorties
//1. not
//2. and , or from left to right
let result= true && false || !true;
console.log(result);


//Variable scope and block scope
let age=19;
if(true){
    let age=20;
    console.log("Inside block scope",age);
}
console.log("Outside block scope",age);

let marks=30;
if(true){
    marks=40;
    console.log("Inside block scope",marks);
}
console.log("Outside block scope",marks);

var grade="a";
if(true){
    var grade="b";
    console.log("Inside block scope",grade);
}
console.log("Outside block scope",grade);