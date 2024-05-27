//Static methods
//Methods which are not present on constructor "property" but "constructor" itself.

//Class declaration
class Car{
    constructor(color,model){
        this.color=color;
        this.model=model;
    }
    startEngine(){
        console.log("This is start engine method");
    }
}
//Static method
Car.breakEngine=function(){
    console.log("This is break method");
}

let Honda=new Car("Black",2019);
Honda.startEngine();
Car.breakEngine();