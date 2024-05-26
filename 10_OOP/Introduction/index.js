//Object oriented programming

//Constructor and new keyword
//We can not use "arrow" function as constructor
//We can call constructor function using "new" keyword


//1. new {object} created empty initailly
let car = function(){
    console.log(this)
}
new car();

//Create constructor we properties
let car1=function(color,model){
    //Properties
    this.color=color;
    this.model=model;
}

let result=new car1("Black",2020);
let result2=new car1("Green",2010);
console.log(result);
console.log(result2);

//To check if instance of some particular class or not
console.log(result2 instanceof car) //False
console.log(result instanceof car1) //True
