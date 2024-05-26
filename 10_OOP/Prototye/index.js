//Prototype
//Each object created by "constructor" function have access
//To all the "methods" present that constructor prototype 


let Car1=function(color,model){
    this.color=color;
    this.model=model;
    //Not a good pratice
    // this.startEngine=function(){
    //     console.log("This is start engine method of car")
    // }
}

Car1.prototype.startEngine=function(){
    console.log("This is start engine method of car")
}

Car1.prototype.company="Tata";

//To see prototype of constructor
console.log(Car1.prototype)

let lambo= new Car1("Yellow",2002);
console.log(lambo);
lambo.startEngine();

//To see prototype of instance
console.log(lambo.__proto__)


//Car1.prototype is prototype "of all objects" created through car constructor
console.log(Car1.prototype.isPrototypeOf(Car1)); //False
console.log(lambo.__proto__.isPrototypeOf(lambo)); //True

//Array prototype
let arr =[1,2,4,3,5,6,4]; //[] is same as new Array([])
console.log(arr.__proto__);
console.log(arr.__proto__.__proto__)

//Object prototype
console.log(Object.prototype)
