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

//Parent class
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

