//Getter and setter and computed property
//Getter and setter are allow you to define Object accessors

//We can also use it class

class Car{
    constructor(color,model){
        this.color=color;
        this.model=model;
    }
    startEngine(){
        console.log("This is start engine function of Car");
    }
    get _startEngine(){ //getter
        console.log("This is start enginge function using get");
    }
    set setColor(color){  //setter 
        this.color=color;
    }
    get description()//Computed property
    {
        return `Your car color is ${this.color} and its model is ${this.model}`;
    }
}

let activa= new Car("Brown",2020);
activa.startEngine(); //Accessing as function

//Accessing as property
activa._startEngine; //getter call

activa.setColor="Blue"; //setter call
console.log(activa);

//Computed property call
console.log(activa.description);