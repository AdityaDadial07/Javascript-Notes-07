//Class declaration

// //Parent class
// class Car{
//     constructor(color,model){
//         this.color=color;
//         this.model=model;
//     }
//     startEngine(){
//         console.log("This is start engine method");
//     }
// }
// //Child class
// class Bike extends Car{

// }

// //Object call
// let newbike=new Bike("Black",2020);
// console.log(newbike);

// Parent class
class Car{
    constructor(color,model){
        this.color=color;
        this.model=model;
    }
    startEngine(){
        console.log("This is start engine method");
    }
}
//Child class
class Bike extends Car{
     //Add some new property and method as well
     constructor(color,model,engineCapacity){
        super(color,model)
        this.engineCapacity=engineCapacity
     }

     bikeMethod(){
        console.log("This is method of bike class");
     }
}

//Object call
let newbike=new Bike("Black",2020,"125cc");
console.log(newbike);
console.log(newbike.__proto__);
 

/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
///////////////////////// Prototypal inheritence ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////

//Prototypical inheritence(using constructor function)
//Parent class
let Car=function(color,model){
    this.color=color;
    this.model=model;
}

Car.prototype.startEngine=function(){
    console.log("This is start engine method");
}

//Child class
let Bike=function(color,model,engineCapacity){
    Car.call(this,color,model);
    this.engineCapacity=engineCapacity;
}
//Inherited from parent class
// Bike.prototype=Object.create(Car.prototype);

//Not inherited
Bike.prototype.ownBike=function(){
    console.log("This is own bike class method");
}

let bike1=new Bike("Green",2020,"2000CC David putra");
console.log(bike1);