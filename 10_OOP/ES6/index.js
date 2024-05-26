//ES6(They still implement prototypal inheritence behind scene)

//Class declaration
class Car{
    constructor(color,model){
      this.color=color;
      this.model=model;
    }
    startEngine(){
        console.log("This is start engine of class");
    }
}
Car.prototype.breakMETHOD=function(){
    console.log("Break method of car")
}
let honda = new Car("Black",2020);
console.log(honda);
console.log(honda.__proto__);
console.log(honda.__proto__.isPrototypeOf(honda));
honda.startEngine();
honda.breakMETHOD();

//Imp points
//Class are not hoisted (you cannot use a class before it is declared)
//Class are also first class citizen(pass as arguments or return)
//Classes are also executed in strict mode
